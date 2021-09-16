import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';

import Home from '../screens/Home';
import Status from '../screens/Status';
import styles from './styles';

const Stack = createNativeStackNavigator();
const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'slide_from_right',
        headerStyle: { backgroundColor: '#1C1B83' },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: '',
          headerTitle: () => null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Status')}>
              <Text style={styles.ButtonText}>Status</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <Text style={styles.WelcomeText}>Olá, bem-vindo</Text>
          ),
        })}
      />
      <Stack.Screen
        name="Status"
        component={Status}
        options={({ navigation }) => ({
          title: '',
          headerTitle: () => <Text style={styles.WelcomeText}>Status</Text>,
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.ButtonText}>Voltar</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
