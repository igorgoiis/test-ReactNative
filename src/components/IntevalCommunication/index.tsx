import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useAppContext } from '../../hooks';
import styles from './styles';

const IntevalCommunication = () => {
  const { intervalSelected, changeInterval, serviceActivated } =
    useAppContext();
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Intervalo de comunicação</Text>
      <View style={styles.ListCards}>
        <TouchableOpacity
          disabled={!serviceActivated}
          style={[
            styles.Card,
            intervalSelected === 10000 && serviceActivated
              ? { borderColor: '#15BC02' }
              : null,
          ]}
          onPress={() => changeInterval(10000)}>
          <Text
            style={[
              styles.TextCard,
              intervalSelected === 10000 && serviceActivated
                ? { color: '#33403B' }
                : null,
            ]}>
            10s
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!serviceActivated}
          style={[
            styles.Card,
            intervalSelected === 5000 && serviceActivated
              ? { borderColor: '#15BC02' }
              : null,
          ]}
          onPress={() => changeInterval(5000)}>
          <Text
            style={[
              styles.TextCard,
              intervalSelected === 5000 && serviceActivated
                ? { color: '#33403B' }
                : null,
            ]}>
            5s
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!serviceActivated}
          style={[
            styles.Card,
            intervalSelected === 3000 && serviceActivated
              ? { borderColor: '#15BC02' }
              : null,
          ]}
          onPress={() => changeInterval(3000)}>
          <Text
            style={[
              styles.TextCard,
              intervalSelected === 3000 && serviceActivated
                ? { color: '#33403B' }
                : null,
            ]}>
            3s
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!serviceActivated}
          style={[
            styles.Card,
            intervalSelected === 1000 && serviceActivated
              ? { borderColor: '#15BC02' }
              : null,
          ]}
          onPress={() => changeInterval(1000)}>
          <Text
            style={[
              styles.TextCard,
              intervalSelected === 1000 && serviceActivated
                ? { color: '#33403B' }
                : null,
            ]}>
            1s
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntevalCommunication;
