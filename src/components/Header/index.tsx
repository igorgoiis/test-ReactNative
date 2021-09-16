import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

interface PropsType {
  page?: string;
}

const Header = (props: PropsType) => {
  return (
    <View style={styles.Container}>
      {props.page === 'Home' ? (
        <>
          <View style={styles.HeaderHome}>
            <Text style={styles.WelcomeText}>Olá, bem-vindo</Text>
            <TouchableOpacity
              onPress={() => console.log('Clicou')}
              style={styles.Button}>
              <Text style={styles.ButtonText}>Status</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.HeaderStatusButton}>
            <TouchableOpacity
              onPress={() => console.log('Clicou')}
              style={styles.Button}>
              <Text style={styles.ButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.WelcomeText}>Status</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Header;
