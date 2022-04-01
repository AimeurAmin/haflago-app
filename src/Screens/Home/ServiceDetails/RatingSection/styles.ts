import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textField: {
    backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15
  },
  iconContainer: {
    justifyContent: 'center',
    paddingRight: 10,
    borderRightWidth: 1,  
    borderColor: '#6C7B8A',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 17
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsText: {
    marginRight: 5
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#432667',
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
    flex: 1,
    borderRadius: 20,
    marginLeft: 10,
    maxWidth: 400
  },
  buttonText: {
    color: 'white',
    marginRight: 10,
    flexGrow: 1,
    textAlign: 'center',
  }
});