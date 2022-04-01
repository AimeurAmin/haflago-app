import { StyleSheet } from 'react-native';
import adjust from '../../../../utils/RN/adjust';
import normalize from '../../../../utils/RN/normalizeSize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap:'wrap'
    // alignItems: 'center',
  },
  picCotnainer: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  pic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 2,
  },
  serviceInfo: {
    marginHorizontal: 15,
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  userName: {
    fontSize: 12,
    color: '#432667',
    marginBottom: 2,
    width: '92%'
  },
  serviceTitleContainer: {
    flexDirection: 'row',
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#432667',
    marginBottom: 5,
    width: '92%'
  },
  ratingContainer: {
    flexDirection: 'row'
  },
  rightContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'flex-end',
  },
  positionContainer: {
    flexDirection: 'row',
  },
  positionText: {
    color: '#432667',
    marginRight: 5
  },
  timeText: {
    color: '#432667',
    marginTop: 10
  }
});