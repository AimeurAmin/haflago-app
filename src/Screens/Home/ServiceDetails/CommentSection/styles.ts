import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  singleComment: {
    flexDirection: 'row',
    marginBottom: 15,
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
  commentUser:{
    paddingLeft: 20,
    marginBottom: 20,
    justifyContent: 'center',
    flex: 1,

  },
  serviceInfo: {
    alignItems: 'flex-start',
  },
  userName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#432667',
    marginBottom: 5,
  },
  textComment:{
    fontSize: 14,
    lineHeight: 18,
    marginTop: 10,
    backgroundColor: '#F3F3F3',
    padding: 10,
    borderRadius: 10
  },
  showMoreButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 20
  },
  textButton: {
    color: '#432667', 
    fontWeight: '700', 
    marginRight: 10
  },

});