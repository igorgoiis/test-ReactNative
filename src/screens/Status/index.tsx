import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { format } from 'date-fns';

import { useGeolocationContext } from '../../hooks/Geolocation';

import styles from './styles';

export default function Status() {
  const { points, loadPointsDatabase } = useGeolocationContext();

  useEffect(() => {
    loadPointsDatabase();
  }, []);

  
  return (
    
    <View style={styles.Container}>
      <FlatList  
        data={points}
        keyExtractor={(item) => item.point_id}
        extraData={points}
        style={ styles.FlatList }
        renderItem={({ item, index }) => (
            <View style={styles.Point}>
              <View>
                <Text style={styles.Text}>Pacote ID: {item.point_id}</Text>
                <Text style={styles.Text}>{item.synced ? 'Sincronizado' : 'Pendente sincronizar'}</Text>
              </View>
              <View>
                <Text style={styles.Text}>{format(new Date(item.createdAt), 'HH:mm')}</Text>
              </View>
            </View>
        )}
        />
    </View>
  )
}
