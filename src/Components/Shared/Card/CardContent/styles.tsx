import { StyleSheet } from 'react-native';
import normalize from '../../../../utils/RN/normalizeSize';
export default StyleSheet.create({
  container: {
    
  },
  title: {
    marginBottom: normalize(5),
    fontSize: normalize(16),
    fontWeight: 'bold'
  },
  description: {
    marginBottom: normalize(10),
    fontSize: normalize(14),
  },
  
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: normalize(15),
  }
});