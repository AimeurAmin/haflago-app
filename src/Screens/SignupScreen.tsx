import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SideMenu from '../Components/SideMenu';
import MenuBar from '../Components/MenuBar';
import { DimensionsModel, AppStateModel } from '../Redux/Actions/appActions';
import { useSelector } from 'react-redux';
import AuthInput from '../Components/AuthInput';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { height } from '@mui/system';

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(4, 'At least 4 characters').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'At least 8 characters')
    .matches(/[A-Z]+/, 'At least one capital letter')
    .matches(/[1-9]/, 'At least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain at least one special character')
    .required('Required'),
});

const SignupScreen = () => {
  const { dimensions }: AppStateModel = useSelector(({ appState }: any) => appState);
  const style = styles(dimensions);
  return (
    <SideMenu>
      <View style={style.container}>
        <MenuBar />
        <Formik
          initialValues={{ 
            username: '',
            email: '',
            password: '',
          }}
          isInitialValid={false}
          onSubmit={values => console.warn(values)}
          validationSchema={SignupSchema}
          >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
            return (
              <View style={style.form}>
                <View style={style.inputContainer}>
                  <AuthInput 
                    style={style.input} 
                    placeholder='Your username'
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    isCorrect={!errors.username && touched.username}
                  />
                    {errors.username && touched.username ? <Text>{errors.username}</Text> : null}
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
                    {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
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
                    {errors.password && touched.password ? <Text>{errors.password}</Text> : null}
                </View>
                <Button onPress={handleSubmit} title="Submit"/>
              </View>
            )
          }}

          </Formik>
        {/* <View style={style.bottom}>
          <Text>Buttons</Text>
        </View> */}
      </View>
    </SideMenu>
  );
};

export default SignupScreen;

const styles = (dimensions?: DimensionsModel) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6D47A8',
    color: '#FFF',
    width: dimensions?.width || 0, 
    height: dimensions?.height || 0
  },
  form: {
    flex: 3,
    marginVertical: 100
  },
  bottom: {
    flex: 1,
  },
  input: {
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
  },
  inputContainer: {
    width: '100%',
    height: 80,
  },
  button: {

  }
});
