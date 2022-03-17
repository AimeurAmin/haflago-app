import { StyleSheet } from 'react-native';
import normalize from '../../../utils/RN/normalizeSize';
// 6D47A8
export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: normalize(15),
    backgroundColor: '#FFF',
    elevation: normalize(10),
    // shadowOffset: {width: normalize(12), height: normalize(1)},
    shadowColor: 'red',
    shadowOpacity: .3,
    // shadowRadius: normalize(20),
    marginHorizontal: normalize(4),
    marginVertical: normalize(6),
    padding: normalize(25)
  }
});