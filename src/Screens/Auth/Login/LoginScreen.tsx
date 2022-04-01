import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const LoginScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen</Text>
      <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen', {screen: 'HomeScreen'})}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;