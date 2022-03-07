import { StyleSheet } from 'react-native';
import normalize from '../../../../utils/RN/normalizeSize';

export default StyleSheet.create ({
  container: {
    flexDirection: 'row',
    paddingVertical: normalize(10),
    justifyContent: 'space-between',
    marginBottom: normalize(15)

  },
  rightContainer: {
    alignItems: 'flex-end'
  },
  locationContainer: {
    flexDirection: 'row'
  },
  leftContainer: {
    flexDirection: 'row'
  },
  picCotnainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  userpic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userInfo: {
    paddingHorizontal: normalize(15),
  }
});