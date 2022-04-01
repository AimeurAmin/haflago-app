import { StyleSheet } from "react-native";
import adjust from '../../../../utils/RN/adjust';

export default StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    paddingVertical: adjust(10),
    paddingHorizontal: adjust(20),
    borderRadius: adjust(15),
  },
  text: {
    fontSize: 16,
    color: '#432667',
    fontWeight: '600',
    marginLeft: 15
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    minWidth: 200,
  },
  buttonsContainer: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#432667',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: 30,
    flexGrow: 1,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  }
});