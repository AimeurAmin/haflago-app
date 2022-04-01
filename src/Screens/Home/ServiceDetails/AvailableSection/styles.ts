import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
