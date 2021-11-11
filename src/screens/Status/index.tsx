import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { format } from 'date-fns';

import { useGeolocationContext } from '../../hooks/Geolocation';

import styles from './styles';

const Status = () => {
  const { points, loadPointsDatabase } = useGeolocationContext();

  useEffect(() => {
    loadPointsDatabase();
  }, [loadPointsDatabase]);

  return (
    <View>
      {points.length !== 0 ? (
        <FlatList
          data={points}
          keyExtractor={item => item.point_id}
          extraData={points}
          style={styles.FlatList}
          renderItem={({ item }) => (
            <View style={styles.Point}>
              <View>
                <Text style={styles.Text}>Pacote ID: {item.point_id}</Text>
                <Text style={styles.Text}>
                  {item.synced ? 'Sincronizado' : 'Pendente sincronizar'}
                </Text>
              </View>
              <View>
                <Text style={styles.Text}>
                  {format(new Date(item.createdAt), 'HH:mm')}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.ContainerVazio}>
          <Text style={styles.TextVazio}>
            Não foi registrado nenhum localização
          </Text>
        </View>
      )}
    </View>
  );
};

export default Status;
