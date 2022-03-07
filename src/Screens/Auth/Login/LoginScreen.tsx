import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React,{useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import AuthInput from '../../../Components/Shared/AuthInput';
import RoundedButton from '../../../Components/Shared/RoundedButton';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../Redux/Actions/authActions';
import { AuthStateModel } from '../../../Redux/Models/AuthModel';

const initState = {username: '', password: ''}
const LoginScreen = ({ navigation }: any) => {
  const [loginData, setLoginData] = useState(initState)
  const dispatch = useDispatch();
  const {isLoading, error, isConnected} = useSelector(({authState : { isLoading, error, isConnected }}: {authState: AuthStateModel}) => ({ isLoading, error, isConnected}));

  const handleChange = (name: string, text: string) => {
    setLoginData((curr) => ({ ...curr, [name]: text }));
  }
  useEffect(() => {
    if (isConnected) {
      navigation.navigate('HomeScreen', {screen: 'HomeScreen'});
    }
  }, [isConnected]);

  const handleSubmit = () => {
    dispatch(login(loginData));
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen</Text>
      <AuthInput 
        style={styles.input} 
        placeholder='Your e-mail address'
        onChangeText={(text: string)=> handleChange('username', text)}
        
      />
      <AuthInput 
        style={styles.input} 
        placeholder='Your e-mail address'
        onChangeText={(text: string)=> handleChange('password', text)}
        secureTextEntry={true}
      />
      <View style={styles.bottomContainer}>
        <RoundedButton onPress={handleSubmit} text='submit' style={styles.buttonStyle} isLoading={isLoading}/>
        {/* isLoading={isLoading} */}
      </View>
      {/* <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen', {screen: 'HomeScreen'})}>
        <Text>Go to Home</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default LoginScreen;
