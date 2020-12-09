import { StyleSheet } from "react-native";
import { APPBAR_HEIGHT } from 'common/utils/responsiveDimmensions';

export const styles = StyleSheet.create({
  container: {
    height: APPBAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 13,
    borderBottomWidth: 1
  },
  notification_container: {
    height: 38,
    width: 38,
    borderRadius: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  location_container: {
    height: 38,
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 16,
    paddingRight: 14,
    paddingLeft: 5,
    alignItems: 'center',
    marginVertical: 10
  },
  location_content: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  location_icon: {
  },
  location_text: {
    width: '80%'
  },
  notification_text_container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    top: 6,
    right: 4,
    width: 16,
    height: 16,
    borderWidth: 1,
  },
  notification_text: {
    fontSize: 7,
    textAlign: 'center'
  }
});
