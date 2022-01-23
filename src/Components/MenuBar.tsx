/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import WhiteLogo from '../assets/WhiteLogo.svg';
import { useDispatch } from 'react-redux';
import appActions from '../Redux/Actions/appActions';

const MenuBar = () => {
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(appActions.toggleMenu());
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenu}>
        <MIcon name={'menu'} size={30} color={'#FFF'} />
      </TouchableOpacity>
      <WhiteLogo width={100} height={50} />
      <View style={styles.picCotnainer}>
        <Image
          source={require('../assets/Userpic.png')}
          style={styles.userpic}
        />
      </View>
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 10,
  },
  userpic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  picCotnainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});
