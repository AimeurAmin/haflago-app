import { StyleSheet } from 'react-native';
import { DimensionsModel } from '../../../Redux/Actions/appActions';
import normalize from '../../../utils/RN/normalizeSize';

export default (dimensions : DimensionsModel  = {}, isKeyboardVisible: boolean) => StyleSheet.create({
  container: {
    width: dimensions?.width,
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: '#3B276A',

  },
  formContainer: {
    flex: isKeyboardVisible? 2 : 3,
    alignItems: 'center',
    paddingVertical: normalize(50),
  },
  inputContainer: {
    width: normalize(300, 'width'),
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: normalize(15),
  },
  error: {
    fontSize: normalize(12),
    color: 'rgba(255, 255, 255, 0.8)',
    marginLeft: normalize(5),
  },
  buttonContainer: {
    flex: isKeyboardVisible ? 1 : 2,
    justifyContent: 'center',
  }
})