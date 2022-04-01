import { StyleSheet, Dimensions } from 'react-native';
import normalize from "../../../utils/RN/normalizeSize";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B276A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {textAlign: 'center', fontSize: 30},
  hint: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  hintText: {
    color: '#FFF',
    textAlign: 'center',
    width: 350,
    padding: 20
  },
  codeFieldRoot: {marginTop: 20},
  sellContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 2,
    marginHorizontal: 3,
  },
  sellContainerFocused: {
    borderWidth: 2,
    borderColor: '#7F379E',
    borderRadius: 8,
    padding: 2,
    marginHorizontal: 3,
  },
  cell: {
    width: normalize(50),
    height: normalize(70),
    lineHeight: normalize(68),
    fontSize: normalize(26),
    fontWeight: '700',
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    textAlign: 'center',
    borderRadius: 5,
    color: '#000'
  },
  focusCell: {
    // borderColor: '#000',
  },
});