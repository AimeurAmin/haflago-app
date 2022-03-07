import { StyleSheet } from 'react-native';
import normalize from '../../../../utils/RN/normalizeSize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: normalize(20)
  },
  rightContainer: {
    flexDirection: 'row'
  }
});