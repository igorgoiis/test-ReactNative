import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#1C1B83',
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 70 : 20,
  },

  WelcomeText: {
    fontSize: 18,
    color: '#fff',
  },

  Button: {
    backgroundColor: '#1C1B83',
  },

  ButtonText: {
    fontSize: 18,
    color: '#fff',
  },

  HeaderHome: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  HeaderStatusButton: {
    flexBasis: '44%',
  },
});

export default styles;
