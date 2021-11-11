import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  FlatList: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  Point: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },

  Text: {
    fontSize: 18,
    color: '#33403B',
    paddingVertical: 5,
  },

  ContainerVazio: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  TextVazio: {
    color: '#aaa',
  },
});

export default styles;
