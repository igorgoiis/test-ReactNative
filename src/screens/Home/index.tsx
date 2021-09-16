import React from 'react';
import { View } from 'react-native';

import Info from '../../components/Info';
import ChangeStatus from '../../components/ChangeStatus';
import IntevalCommunication from '../../components/IntevalCommunication';

import styles from './styles';

export default function Home() {
  return (
    <>
      <View style={styles.Container}>
        <Info />
        <ChangeStatus />
        <IntevalCommunication />
      </View>
    </>
  );
}
