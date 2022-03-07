import { StyleSheet } from "react-native";
import { DimensionsModel } from '../../../Redux/Actions/appActions';
import normalize from "../../../utils/RN/normalizeSize";

export default (Dimensions: any) => StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    color: 'black',
  },
  closedMenuChildrenStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    backgroundColor: 'pink',
    color: 'white',
    height: '100%'
  },
  menuContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: '#432667',
  },
  text: {
    color: 'white',
    fontSize: normalize(16)
  }
});