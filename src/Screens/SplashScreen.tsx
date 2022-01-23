import * as React from 'react';
import { useEffect} from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen', {screen: 'HomeScreen'});
    }, 300);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D47A8',
  },
  text: {
    color: 'black',
  },
});
