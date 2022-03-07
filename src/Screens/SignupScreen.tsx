import { Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SideMenu from '../Components/Shared/SideMenu/SideMenu';
import MenuBar from '../Components/Shared/MenuBar/MenuBar';
import { DimensionsModel, AppStateModel } from '../Redux/Actions/appActions';
import { useSelector, useDispatch } from 'react-redux';
import AuthInput from '../Components/Shared/AuthInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RoundedButton from '../Components/Shared/RoundedButton';
import { AuthModel, AuthStateModel } from '../Redux/Models/AuthModel';
import { signUp } from '../Redux/Actions/authActions';

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
  const dispatch = useDispatch();
  const { dimensions }: AppStateModel = useSelector(({ appState }: any) => appState);
  const {isLoading, error} = useSelector(({authState : { isLoading, error }}: {authState: AuthStateModel}) => ({ isLoading, error}));
  const style = styles(dimensions);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e: any) => {
        e.preventDefault();
      }),
    [navigation],
  );

  useEffect(() => {
    console.log(error);
    
  }, [])

  const submit = (values: AuthModel) => { 
    dispatch(signUp(values));
  }

  return (
    <SideMenu>
      <KeyboardAvoidingView enabled={true} style={style.container}>
        <MenuBar />
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
              <View style={style.form}>
                <ScrollView style={style.scrollView} contentContainerStyle={{justifyContent: 'center'}}>
                  <View style={style.inputContainer}>
                    <AuthInput 
                      style={style.input} 
                      placeholder='Your username'
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                      isCorrect={!errors.username && touched.username}
                    />
                    <View style={style.errorContainer}>
                      {errors.username && touched.username ? <Text>{errors.username}</Text> : null}
                    </View>
                  </View>
                  <View style={style.inputContainer}>
                    <AuthInput 
                      style={style.input} 
                      placeholder='Your e-mail address'
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      isCorrect={!errors.email && touched.email}
                    />
                      <View style={style.errorContainer}>
                        {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
                      </View>
                  </View>
                  <View style={style.inputContainer}>
                    <AuthInput 
                      style={style.input} 
                      placeholder='Your phone number'
                      onChangeText={handleChange('phone_number')}
                      onBlur={handleBlur('phone_number')}
                      value={values.phone_number}
                      isCorrect={(values.phone_number.length > 0) && !errors.phone_number && touched.phone_number}
                    />
                      <View style={style.errorContainer}>
                        {errors.phone_number && touched.phone_number ? <Text>{errors.phone_number}</Text> : null}
                      </View>
                  </View>
                  <View style={style.inputContainer}>
                    <AuthInput 
                      style={style.input} 
                      placeholder='Your password'
                      secureTextEntry={true}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      isCorrect={(values.password.length > 0) && !errors.password && touched.password}
                    />
                      <View style={style.errorContainer}>
                        {errors.password && touched.password ? <Text>{errors.password}</Text> : null}
                      </View>
                  </View>
                </ScrollView>
                <View style={style.bottomContainer}>
                  <RoundedButton onPress={handleSubmit} isLoading={isLoading}/>
                </View>
              </View>
            )
          }}

          </Formik>
        {/* {error && 
          <View style={style.bottom}>
            <Text>{error.status}</Text>
          </View>
        } */}
      </KeyboardAvoidingView>
    </SideMenu>
  );
};

export default SignupScreen;

const styles = (dimensions?: DimensionsModel) => StyleSheet.create({
  container: {
    height: dimensions?.height,
    width: dimensions?.width,
    backgroundColor: '#6D47A8',
    flex: 1
  },
  form: {
    flexDirection: 'column',
    flexGrow: 1,
    paddingHorizontal: (dimensions?.width || 0) * .1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  scrollView: {
    // flex: 2,
    height: (dimensions?.height || 0) * .5,
    width: '95%',
    // backgroundColor: 'blue',
    paddingVertical: (dimensions?.height || 0) * .2
  },
  inputContainer: {

  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)'
  },
  errorContainer: {
    height: (dimensions?.height || 0) * .03
  },
  bottomContainer: {
    height: (dimensions?.height || 0) * .2,
    width: (dimensions?.width || 0) * .6,
    // backgroundColor: 'green'

  }
});
