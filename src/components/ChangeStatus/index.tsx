/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Switch } from 'react-native';
import Geolocation, {
  GeolocationError,
  GeolocationOptions,
  GeolocationResponse,
} from '@react-native-community/geolocation';
import { format } from 'date-fns';

import { useAppContext } from '../../hooks';
import { useGeolocationContext } from '../../hooks/Geolocation';
import { Point } from '../../database/model/Point';

import styles from './styles';

const ChangeStatus = () => {
  const { serviceActivated, changeServiceStatus, intervalSelected } =
    useAppContext();
  const { networkActivated, savePointDatabase } = useGeolocationContext();
  const [trackingInterval, setTrackingInterval] = useState<
    number | null 
  >(intervalSelected);

  useEffect(() => {
    stopGetPosition();
    startGetPosition();
  }, [intervalSelected, serviceActivated]);

  const handleService = useCallback(() => {
    changeServiceStatus();
    stopGetPosition();
    if (serviceActivated) {
      startGetPosition();
    }
  }, [serviceActivated]);

  const startGetPosition = useCallback(() => {
    const monitoring = setInterval(() => {
      if (serviceActivated) {
        getPosition();
      } else {
        stopGetPosition();
      }
    }, intervalSelected);

    setTrackingInterval(monitoring as unknown as number);
  }, [serviceActivated, trackingInterval, intervalSelected]);

  const stopGetPosition = useCallback(() => {
    if (trackingInterval) {
      clearInterval(trackingInterval);
      setTrackingInterval(null);
    }
  }, [intervalSelected, trackingInterval, serviceActivated]);

  const getPosition = useCallback(async () => {
    const options: GeolocationOptions = {
      enableHighAccuracy: !networkActivated ? true : false,
      // timeout: 1000,
      maximumAge: 0,
      distanceFilter: 0,
      useSignificantChanges: true,
    };

    serviceActivated && networkActivated
      ? Geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude, speed } }: GeolocationResponse) => {
            const point = {
              point_id: `${Math.ceil(Math.random() * Math.pow(10, 8))}`,
              latitude,
              longitude,
              speed,
              time: format(new Date(), 'yyyy-MM-dd'),
              synced: false,
              createdAt: `${new Date()}`,
            } as Point;
            console.log('Ainda está pegando')
            savePointDatabase(point);
          },
          (error: GeolocationError) => {
            console.error('Erro ao pegar a localização', error);
          },
          options,
        )
      : clearInterval(Number(trackingInterval));;
  }, [intervalSelected, serviceActivated,networkActivated ]);

  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.Title}>Status do serviço</Text>
        <Text style={styles.Status}>
          Serviço {serviceActivated ? 'ativo' : 'inativo'}
        </Text>
      </View>
      <Switch
        disabled={false}
        trackColor={{ false: '#E4E3EB', true: '#E4E3EB' }}
        thumbColor={serviceActivated ? '#15BC02' : '#5A656B'}
        ios_backgroundColor="#E4E3EB"
        onValueChange={handleService}
        value={serviceActivated}
        style={styles.Switch}
      />
    </View>
  );
};

export default ChangeStatus;
