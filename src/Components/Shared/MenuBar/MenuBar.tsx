import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import WhiteLogo from '../../../assets/WhiteLogo.svg';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '../../../Redux/Actions/appActions';
import normalize from '../../../utils/RN/normalizeSize';
import { resetDataAction } from '../../../Redux/Actions/authActions';

const MenuBar = () => {
  const dispatch = useDispatch();
  const menuIsOpen: boolean = useSelector(({ appState: { menuIsOpen } }: any) => menuIsOpen);

  const handleMenu = () => {
    dispatch(appActions.toggleMenu());
  }
  const handleUserProfile = () => {
    dispatch(resetDataAction());
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenu}>
        <MIcon name={menuIsOpen ? 'close' : 'menu'} size={25} color={'#FFF'} />
      </TouchableOpacity>
      <WhiteLogo width={normalize(90)} height={normalize(35)} />
      <TouchableOpacity onPress={handleUserProfile}>
        <View style={styles.picCotnainer}>
          <Image
            source={require('../../../assets/Userpic.png')}
            style={styles.userpic}
          />
        </View>
      </TouchableOpacity>
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
    padding: 13,
    backgroundColor: '#6D47A8',
    borderColor: '#FFF',
  },
  userpic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  picCotnainer: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
});
