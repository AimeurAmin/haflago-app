import { StyleSheet, Dimensions } from 'react-native';
import { DimensionsModel } from '../../../Redux/Actions/appActions';
import normalize from '../../../utils/RN/normalizeSize';

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
    backgroundColor: 'red'
  },
  cardContainer: {
    padding: 15
  },
  picCotnainer: {
    width: dimensions.width,
    height: (dimensions.height || 0) * .55,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  arrowLeft: {
    position: 'absolute',
    backgroundColor: 'white',
    top: '45%',
    left: '3%'
  },
  arrowRight: {
    position: 'absolute',
    backgroundColor: 'white',
    top: '45%',
    right: '3%'
  },
  detailsContainer: {
    width: dimensions.width,
    height: 1000,
    backgroundColor: 'white',
    position: 'relative'
  },
  details: {
    position: 'absolute',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    top: -50,
    zIndex: 99,
    backgroundColor: 'white',
    width: dimensions.width,
    height: 500,
    paddingTop: (dimensions.height || 0) * .05,
    paddingHorizontal: (dimensions.width || 0) * .05,

  },
  imagesIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  imageButton: {
    width: ((Dimensions.get('screen').width + Dimensions.get('screen').height) / 2) * .13,
    height: (Dimensions.get('screen').width + Dimensions.get('screen').height) / 2 * .13,
    resizeMode: 'cover',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  smallFlatList: {
    marginHorizontal: (dimensions.width || 0) * .05,
  }
})