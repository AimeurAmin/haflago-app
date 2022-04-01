import { StyleSheet } from 'react-native';
import { DimensionsModel } from '../../Redux/Actions/appActions';
import normalize from '../../utils/RN/normalizeSize';
export default (dimensions: DimensionsModel) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#FFF',
    width: dimensions.width, 
  },
  content: {
    flex: 1,
    paddingHorizontal: normalize(25),
  },
  cardContainer: {
    padding: 15
  }
})