import { StyleSheet } from "react-native";
import normalize from '../../../../utils/RN/normalizeSize';
import { normalizeWidth } from '../../../../utils/RN/normalizeSize';
import adjust from '../../../../utils/RN/adjust';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#432667',
    marginLeft: normalize(5),
  }
});
