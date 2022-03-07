import { StyleSheet } from "react-native";
import normalize from "../../../../../utils/RN/normalizeSize";

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },
  text: {
    fontSize: normalize(13),
    fontWeight: '500',
    marginLeft: normalize(4)
  }
})