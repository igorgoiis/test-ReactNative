/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import NetInfo from '@react-native-community/netinfo';
import { Q } from '@nozbe/watermelondb';
// import Geolocation from '@react-native-community/geolocation';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

import { database } from '../database';
import { Point } from '../database/model/Point';

import { useAppContext } from './';
import api from '../services/api';

interface GeolocationContextData {
  loadPointsDatabase: () => Promise<void>;
  networkActivated: boolean | null;
  changeNetwork: (value: boolean) => void;
  savePointDatabase: (point: Point) => Promise<void>;
  points: Point[];
  setPoints: (points: Point[]) => void;
}

const GeolocationContext = createContext<GeolocationContextData>(
  {} as GeolocationContextData,
);

export const GeolocationProvider: React.FC = ({ children }) => {
  const { changeServiceStatus, serviceActivated, intervalSelected } =
    useAppContext();
  const [networkActivated, setNetworkActivated] = useState<boolean | null>(
    true,
  );
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    getPermission();
    checkNetwork();
    loadPointsDatabase();
    synchronizePoints();
  }, []);

  const getPermission = useCallback(async () => {
    if (Platform.OS === 'android') {
      const permissionEnabled = await PermissionsAndroid.check(
        'android.permission.ACCESS_FINE_LOCATION',
      );

      if (!permissionEnabled) {
        const granted = await PermissionsAndroid.request(
          'android.permission.ACCESS_FINE_LOCATION',
        );

        if (!granted) {
          changeServiceStatus(false);
          Alert.alert(
            'Atenção',
            'O serivço não estará ativo enquanto o acesso a localização não for autorizada.',
          );
        }
      }
    }
  }, [serviceActivated, intervalSelected]);

  const loadPointsDatabase = useCallback(async () => {
    const pointCollection = database.get<Point>('points');
    const res = await pointCollection.query().fetch();
    setPoints(res);
  }, [points]);

  const synchronizePoints = useCallback(async () => {
    setInterval(async () => {
      if (networkActivated) {
        const pointCollection = database.get<Point>('points');
        const res = await pointCollection.query(Q.where('synced', false)).fetch();
        res.map(async point => {
          try {
            const { data } = await api.post<Point>(`/points/${point.point_id}`, {
              id: point.point_id,
              latitude: point.latitude,
              longitude: point.longitude,
              speed: point.speed,
              time: point.time,
            }); 
  
            await database.write(async () => {
              const point_res = await database.get<Point>('points').find(point.id);
              await point_res.update(() => {
                point_res.synced = true
              });
            });
  
          } catch (error) {
            console.error(error);
            throw new Error('Falha ao sincronizar localizações!!!');
          }
        });
  
        await loadPointsDatabase();
      }
    }, 3000)
  }, []);

  const changeNetwork = useCallback(
    (value: boolean) => {
      setNetworkActivated(value);
    },
    [networkActivated],
  );

  const checkNetwork = useCallback(() => {
    setInterval(() => {
      NetInfo.fetch().then(state => {
        setNetworkActivated(state.isConnected);
      });
    }, 1000);
  }, [networkActivated]);

  const savePointDatabase = useCallback(async (point: Point) => {
    const pointCollection = database.get<Point>('points');
    await database.write(async () => {
      const res = await pointCollection.create(newPoint => {
        newPoint.point_id = point.point_id;
        newPoint.latitude = point.latitude;
        newPoint.longitude = point.longitude;
        newPoint.speed = point.speed;
        newPoint.time = point.time;
        newPoint.synced = point.synced;
        newPoint.createdAt = point.createdAt;
      });
      const date = res._raw as unknown as Point;
      setPoints((oldState) => [date, ...oldState]);
    });
  }, []);

  return (
    <GeolocationContext.Provider
      value={{
        networkActivated,
        changeNetwork,
        savePointDatabase,
        points,
        setPoints,
        loadPointsDatabase,
      }}>
      {children}
    </GeolocationContext.Provider>
  );
};

export function useGeolocationContext(): GeolocationContextData {
  const context = useContext(GeolocationContext);

  if (!context) {
    throw new Error('Error Geolocation Context');
  }

  return context;
}
