import React from 'react';
import { View, Image, Text } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';
import styles from './styles';
import LocationSvg from '../../assets/logo.png';
import { useGeolocationContext } from '../../hooks/Geolocation';

const Info = () => {
  const { networkActivated } = useGeolocationContext();
  return (
    <View style={styles.Container}>
      <Image source={LocationSvg} style={styles.Img} />
      <View>
        <Text style={styles.Title}>My GPS - Tracking</Text>
        {networkActivated ? (
          <Text style={styles.StatusOline}>Online</Text>
        ) : (
          <Text style={styles.StatusOffline}>Offline</Text>
        )}
      </View>
    </View>
  );
};

export default Info;
