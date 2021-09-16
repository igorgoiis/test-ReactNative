import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2'
  },

  Img: {
    width: 70,
    height: 70,
    marginRight: 30,
  },

  Title: {
    fontSize: 22,
    fontWeight: "700",
    color: '#33403B',
  },

  StatusOline: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#15BC02',
  },

  StatusOffline: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#FF0000',
  },
});

export default styles;