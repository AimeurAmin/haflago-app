import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    marginLeft: 10,
    flex: 3,
    flexDirection: 'column-reverse'
  },
  ratingContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    marginBottom: 10,
  },
  number: {
    fontSize: 16,
    fontWeight: '700',
    color: '#432667',
    marginRight: 10
  },
  chartBarContainer: {
    width: Dimensions.get('screen').width * (3/5),
    height: 20,
    flexShrink: 1,
    backgroundColor: '#F3F3F3',
  },
  chartBar: {
    height: 20,
  },
});