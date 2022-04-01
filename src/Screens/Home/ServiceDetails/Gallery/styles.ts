import { StyleSheet, Dimensions } from 'react-native';
import adjust from '../../../../utils/RN/adjust';

const { WIDTH, HEIGHT }: any = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#FFF',
    position: 'relative',
  },
  picCotnainer: {
    width: Dimensions.get('screen').width,
    height: (Dimensions.get('screen').height || 0) * .65,
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
    top: '45%',
    left: '3%',
  },
  arrowRight: {
    position: 'absolute',
    top: '45%',
    right: '3%',
  },
  imagesThumbList: {
    paddingVertical: adjust(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: 'white',
  },
  imageButton: {
    width: ((Dimensions.get('screen').width + Dimensions.get('screen').height) / 2) * .13,
    height: (Dimensions.get('screen').width + Dimensions.get('screen').height) / 2 * .13,
    resizeMode: 'cover',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  smallFlatList: {
    marginHorizontal: (Dimensions.get('screen').width || 0) * .05,
  },
});