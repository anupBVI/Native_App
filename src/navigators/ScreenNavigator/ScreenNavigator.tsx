import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';
import SuccessScreen from '../../screens/SuccessScreen/SuccessScreen';
import ShopScreen from '../../screens/ShopScreen/ShopScreen';
import ProductDetailsScreen from '../../screens/Home/ProductDetailsScreen/ProductDetailsScreen';
import CartScreen from '../../screens/CartScreen/CartScreen';

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SuccessScreen"
        component={SuccessScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ShopScreen"
        component={ShopScreen}
      />
      <Stack.Screen
        options={{headerShown: false , title:""}}
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        options={{headerShown: true , title:""}}
        name="CartScreen"
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

export default ScreenNavigator;
