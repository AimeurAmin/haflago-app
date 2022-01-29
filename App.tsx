import React, { useState, useEffect }  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import appActions from './src/Redux/Actions/appActions';
import { useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';

import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const dispatch = useDispatch();

  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  Dimensions.addEventListener('change', () => {
    setDimensions({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    })
  });

  useEffect(() => {
    dispatch(appActions.setDimensions({
      width: dimensions.width,
      height: dimensions.height,
      isLandscape: dimensions.width < dimensions.height,
    }));
  }, [dimensions])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
