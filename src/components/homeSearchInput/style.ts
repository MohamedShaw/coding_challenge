import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20


  },
  content: {
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  text: {
    lineHeight: 20,
    fontSize: 16,
    paddingLeft: 4
  },
  input: {
    alignSelf: 'stretch',
    flex: 1,


  }
})