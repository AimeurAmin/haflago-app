import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import appActions, { AppStateModel } from '../../../Redux/Actions/appActions';
import { useRef, useEffect } from 'react';
import normalize from '../../../utils/RN/normalizeSize';
import styles from './styles';

const SideMenu = ({ children }: any) => {
  const dispatch = useDispatch();
  const { menuIsOpen, dimensions }: AppStateModel = useSelector(({ appState }: any) => appState);
  const style = styles(Dimensions);
  
  const offSetValueX = useRef(new Animated.Value(0)).current,
    offSetValueY = useRef(new Animated.Value(0)).current,
    scaleValue = useRef(new Animated.Value(menuIsOpen ? 0.8 : 1)).current;


  useEffect(() => {
    offSetValueX.setValue(0);
    offSetValueY.setValue(0);
    if (menuIsOpen) {
      dispatch(appActions.toggleMenu());
    }

  }, [dimensions.isLandscape]);

  useEffect(() => {
    _scale();

    if (dimensions.isLandscape) {
      _offsetX();
    } else {
      _offsetY();
    }
  }, [menuIsOpen]);


  const _scale = () => {
    Animated.timing(scaleValue, {
      toValue: menuIsOpen ? 0.8 : 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  const _offsetX = () => {
    Animated.timing(offSetValueX, {
      toValue: menuIsOpen ? (dimensions.width || 0) / 1.3 : 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  const _offsetY = () => {
    Animated.timing(offSetValueY, {
      toValue: menuIsOpen ? (dimensions.height || 0) / 1.3 : 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  return (
    <View style={style.container}>
      <View style={style.menuContainer}>
        <Text style={style.text}>SideMenu</Text>
      </View>

      <Animated.View style={{
        ...style.closedMenuChildrenStyle,
        flex: 1,
        transform: [{ scale: scaleValue }, { translateX: offSetValueX }, { translateY: offSetValueY }],
        borderRadius: menuIsOpen ? 10 : 0,
        overflow: 'hidden',
      }}>
        {menuIsOpen ? (
          <TouchableOpacity style={{flex: 1}} activeOpacity={0.9} onPress={() => menuIsOpen ? dispatch(appActions.toggleMenu()) : undefined}>
            {children}
          </TouchableOpacity>
        ) : <View style={{flex: 1, backgroundColor: '#6D47A8'}}>{children}</View>
        }
      </Animated.View>
    </View >
  );
};

export default SideMenu;
