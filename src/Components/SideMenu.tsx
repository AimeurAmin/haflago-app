import * as React from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import appActions, { AppStateModel } from '../Redux/Actions/appActions';
import { useRef, useEffect } from 'react';

const SideMenu = ({ children }: any) => {
  const dispatch = useDispatch();
  const { menuIsOpen, dimensions }: AppStateModel = useSelector(({ appState }: any) => appState);

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
      toValue: menuIsOpen ? dimensions.width / 1.3 : 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  const _offsetY = () => {
    Animated.timing(offSetValueY, {
      toValue: menuIsOpen ? dimensions.height / 1.3 : 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Text style={styles.text}>SideMenu</Text>
      </View>

      <Animated.View style={{
        ...styles.closedMenuChildrenStyle,
        transform: [{ scale: scaleValue }, { translateX: offSetValueX }, { translateY: offSetValueY }],
        borderRadius: menuIsOpen ? 10 : 0,
        overflow: 'hidden',
      }}>
        {menuIsOpen ? (
          <TouchableOpacity activeOpacity={0.9} onPress={() => menuIsOpen ? dispatch(appActions.toggleMenu()) : undefined}>
            {children}
          </TouchableOpacity>
        ) : <View>{children}</View>
        }
      </Animated.View>
    </View >
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
    color: 'black'
  },
  closedMenuChildrenStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexGrow: 1,
    color: 'white',
  },
  menuContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  text: {
    color: 'black',
    fontSize: 16
  }
});
