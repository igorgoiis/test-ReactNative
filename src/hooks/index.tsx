/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GeolocationProvider } from './Geolocation';

interface AppContextData {
  serviceActivated: boolean;
  changeServiceStatus: (status?: boolean) => void;
  intervalSelected: number;
  changeInterval: (interval: number) => void;
  setAsyncStorage: (name: string, data: any) => Promise<void>;
  getAsyncStorage: (name: string) => Promise<string | null>;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [serviceActivated, setServiceActivated] = useState(false);
  const [intervalSelected, setIntervalSelected] = useState<number>(10000);

  useEffect(() => {
    const loadAsyncStorageData = async () => {
      const statusService = await getAsyncStorage('@MyGPS:status_service');
      const interval = await getAsyncStorage('@MyGPS:interval');
      statusService && setServiceActivated(JSON.parse(statusService));
      interval && setIntervalSelected(JSON.parse(interval));
    };

    loadAsyncStorageData();
  }, []);

  useEffect(() => {
    async function teste() {
      const statusService = await getAsyncStorage('@MyGPS:status_service');
      const interval = await getAsyncStorage('@MyGPS:interval');
      console.log(serviceActivated);
      console.log(intervalSelected);
      console.log(statusService);
      console.log(interval);
    }

    teste();
  }, [serviceActivated, intervalSelected]);

  const changeServiceStatus = useCallback(
    (status?: boolean) => {
      setServiceActivated(status !== undefined ? status : !serviceActivated);
      setAsyncStorage(
        '@MyGPS:status_service',
        status !== undefined ? status : !serviceActivated,
      ).then();
    },
    [serviceActivated],
  );

  const changeInterval = useCallback(
    (interval: number) => {
      setIntervalSelected(interval);
      setAsyncStorage('@MyGPS:interval', interval);
    },
    [intervalSelected],
  );

  const setAsyncStorage = useCallback(async (name: string, data: any) => {
    await AsyncStorage.setItem(name, JSON.stringify(data));
  }, []);

  const getAsyncStorage = useCallback(async (name: string) => {
    return await AsyncStorage.getItem(name);
  }, []);

  return (
    <AppContext.Provider
      value={{
        serviceActivated,
        changeServiceStatus,
        intervalSelected,
        changeInterval,
        setAsyncStorage,
        getAsyncStorage,
      }}>
      <GeolocationProvider>{children}</GeolocationProvider>
    </AppContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('Error.');
  }

  return context;
}
