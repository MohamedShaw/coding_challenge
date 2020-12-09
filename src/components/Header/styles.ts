import { StyleSheet } from "react-native";
import { APPBAR_HEIGHT } from 'common/utils/responsiveDimmensions';

export const styles = StyleSheet.create({
  container: {
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1.2
  },
  items: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center', fontSize: 17
  },
  content: {
    justifyContent: 'center'
  },
  left: {
    justifyContent: 'flex-start'
  },
  right: {
    justifyContent: 'flex-end'
  },
  back_icon_container: {
    height: 38,
    width: 38,
    borderRadius: 9.6,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  back_icon: {
  }
});
