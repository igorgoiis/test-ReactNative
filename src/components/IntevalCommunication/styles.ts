import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },

  Title: {
    fontSize: 22,
    color: '#33403B',
    marginBottom: 10,
  },

  ListCards: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  Card: {
    width: 70,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#b2b2b2',
  },

  TextCard: {
    fontSize: 20,
    color: '#b2b2b2',
    textAlign: 'center',
  }

});

export default styles;