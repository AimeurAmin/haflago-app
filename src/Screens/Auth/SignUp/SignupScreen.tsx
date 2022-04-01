import { View, Text, StyleSheet, Dimensions, Platform, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react'
import SideMenu from '../../../Components/Shared/SideMenu/SideMenu'
import { AppStateModel, DimensionsModel } from '../../../Redux/Actions/appActions'
import { useSelector, useDispatch } from 'react-redux';
import AuthInput from '../../../Components/Shared/AuthInput';
import normalize from '../../../utils/RN/normalizeSize';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RoundedButton from '../../../Components/Shared/RoundedButton';
import { AuthStateModel } from '../../../Redux/Models/AuthModel';
import WhiteLogo from '../../../assets/WhiteLogo.svg';
import { signUp } from '../../../Redux/Actions/authActions';

import Snackbar from 'react-native-snackbar';
import styles from './styles';
const SignupSchema = Yup.object().shape({
  username: Yup.string().min(4, 'At least 4 characters').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'At least 8 characters')
    .matches(/[A-Z]+/, 'At least one capital letter')
    .matches(/[1-9]/, 'At least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain at least one special character')
    .required('Required'),
  phone_number: Yup.string()
    .min(10, 'Must contain at least 10 numbers')
    .matches(
      /^(?:(?:\+|00)213[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/,
      'Should only contain numbers'
    )
    .required('Required')
});

const SignupScreen = ({navigation}: any) => {
  const { dimensions }: AppStateModel = useSelector(({ appState }: any) => appState);
  const {isLoading, error, signUpData} = useSelector(({authState : { isLoading, error, user: { signUpData } }}: {authState: AuthStateModel}) => ({ isLoading, error, signUpData}));
  
  const dispatch  = useDispatch();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const style = styles(dimensions, isKeyboardVisible);

 useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if(error?.status === 409) {
      Snackbar.show({
        text: 'User name or email already taken',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
        action: {
          text: 'OK',
          onPress: () => { },
        },
      });
    } else if(error) {
      console.error(error);
      Snackbar.show({
        text: 'Something went kinda wrong, please contact us.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
        action: {
          text: 'OK',
          onPress: () => { },
        },
      });
    }

    if(signUpData) {
      navigation.navigate('ValidateAccountScreen', {screen: 'ValidateAccountScreen'});
    }
  }, [error, signUpData]);

  const submit = (values: any) => {
    dispatch(signUp(values));
  }

  return (
    <SideMenu>
      <View style={style.container}>
        <Formik
          initialValues={{ 
            username: '',
            email: '',
            password: '',
            phone_number: ''
          }}
          onSubmit={(values) => submit(values)}
          validationSchema={SignupSchema}
          >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
            return (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"} 
              style={style.formContainer}>
              <View  style={{flex: isKeyboardVisible ? 1 : 2, justifyContent: 'center',}}>
                <WhiteLogo width={normalize(isKeyboardVisible? 120 : 180)} height={normalize(isKeyboardVisible? 55 : 100)} />
              </View>

              <View>
                <View style={style.inputContainer}>
                  <AuthInput style={style.input} 
                    placeholder='Your username'
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    isCorrect={!errors.username && (values.username.length !== 0 || touched.username)}
                  />
                  <Text style={style.error}>{errors.username}</Text>
                </View>
                <View style={style.inputContainer}>
                  <AuthInput style={style.input}
                    placeholder='Your e-mail address'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    isCorrect={!errors.email && (values.email.length !== 0 || touched.email)}
                  />
                  <Text style={style.error}>{errors.email}</Text>
                </View>
                <View style={style.inputContainer}>
                  <AuthInput style={style.input} 
                    placeholder='Your phone number'
                    onChangeText={handleChange('phone_number')}
                    onBlur={handleBlur('phone_number')}
                    value={values.phone_number}
                    isCorrect={!errors.phone_number && (values.phone_number.length !== 0 || touched.phone_number)}
                  />
                  <Text style={style.error}>{errors.phone_number}</Text>
                </View>
                <View style={style.inputContainer}>
                  <AuthInput style={style.input} 
                    placeholder='Your password'
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    isCorrect={!errors.password && (values.password.length !== 0 || touched.password)}
                  />
                  <Text style={style.error}>{errors.password}</Text>
                </View>
              </View>
              {!isKeyboardVisible &&  <View style={style.buttonContainer}>
                <RoundedButton onPress={handleSubmit} isLoading={isLoading} text={'CREATE ACCOUNT'}/>
              </View>}
            </KeyboardAvoidingView>
            )
          }}
        </Formik>
      </View>
    </SideMenu>
  )
}

export default SignupScreen
