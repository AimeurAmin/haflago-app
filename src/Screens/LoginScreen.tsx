import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D47A8'
  }
});
