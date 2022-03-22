import { StyleSheet, Dimensions } from 'react-native';
import { DimensionsModel } from '../../../Redux/Actions/appActions';


export default (dimensions: DimensionsModel) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#FFF',
    width: dimensions.width, 
    position: 'relative',
    
  },
  content: {
    flex: 1,
    height: dimensions.height,
  },
  detailsContainer: {
    width: dimensions.width,
    height: 1000,
    backgroundColor: 'white',
    position: 'relative',
    paddingHorizontal: (dimensions.width || 0) * .05,

  },
  shareContainer: {
    flexDirection: 'row',
    paddingVertical: '7%',
    width: '100%',
    justifyContent: 'center',
  },
  shareButton: {
    marginLeft: '5%'
  },
})