import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },

  Title: {
    fontSize: 22,
    color: '#33403B',
  },

  Switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },

  Status: {
    fontSize: 14,
    color: '#555B62',
  },
});

export default styles;
