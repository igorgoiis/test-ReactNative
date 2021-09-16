import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';
import { AppProvider } from './src/hooks';

// import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#000065" barStyle="light-content" />
      <NavigationContainer>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </NavigationContainer>
    </>
  );
}
App;
