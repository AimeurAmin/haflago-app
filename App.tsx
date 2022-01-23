import React, { useState, useEffect }  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import { Dimensions } from 'react-native';
import appActions from './src/Redux/Actions/appActions';
import { useDispatch } from 'react-redux';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
