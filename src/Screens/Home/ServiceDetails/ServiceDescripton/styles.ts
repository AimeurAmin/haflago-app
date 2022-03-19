import { StyleSheet } from 'react-native';
import adjust from '../../../../utils/RN/adjust';
import normalize from '../../../../utils/RN/normalizeSize';

export default StyleSheet.create({
  descriptionContainer: {
    backgroundColor: '#F3F3F3',
    padding: 20,
    borderRadius: adjust(15),
    marginTop: normalize(25)
  },
  description: {
    color: '#6C7B8A'
  }
});