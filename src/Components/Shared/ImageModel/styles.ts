import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    position: 'relative'
  },
  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1
  }
});