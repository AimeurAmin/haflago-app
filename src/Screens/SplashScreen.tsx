import * as React from 'react';
import { useEffect} from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Logo from '../assets/svg/logo/LogoHG.svg';
import normalize from '../utils/RN/normalizeSize';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignupScreen', {screen: 'SignupScreen'});
    }, 300);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Logo width={normalize(200)} height={normalize(100)} />

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
  },
});
