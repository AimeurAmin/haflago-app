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
    backgroundColor: 'white',
  },
  detailsContainer: {
    width: dimensions.width,
    position: 'relative',
    paddingHorizontal: (dimensions.width || 0) * .1,
    

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
  availableContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  availableItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 5,
  },
  picCotnainer: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    overflow: 'hidden',
    marginRight: 10
  },
  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  availableText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6C7B8A',
    marginRight: 10
  }
})