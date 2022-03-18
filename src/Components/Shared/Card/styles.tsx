import { StyleSheet } from 'react-native';
import normalize from '../../../utils/RN/normalizeSize';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: normalize(15),
    backgroundColor: '#FFF',
    elevation: normalize(10),
    shadowColor: '#6D47A8',
    shadowOpacity: .3,
    marginHorizontal: normalize(4),
    marginVertical: normalize(6),
    padding: normalize(25)
  }
});