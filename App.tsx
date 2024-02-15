import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import SuccessScreen from './src/screens/SuccessScreen/SuccessScreen';
import ShopScreen from './src/screens/ShopScreen/ShopScreen';
import HomeScreen from './src/screens/Home/HomeScreen/HomeScreen';
import CategoryScreen from './src/screens/Home/CategoryScreen/CategoryScreen';
import ProductsScreen from './src/screens/Home/ProductsScreen/ProductsScreen';
import ProductDetailsScreen from './src/screens/Home/ProductDetailsScreen/ProductDetailsScreen';
import ReviewScreen from './src/screens/Home/ReviewScreen/ReviewScreen';
import ScreenNavigator from './src/navigators/ScreenNavigator/ScreenNavigator';
import {ToastProvider} from 'react-native-toast-notifications';
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ToastProvider>
      <NavigationContainer>
        <ScreenNavigator />
      </NavigationContainer>
    </ToastProvider>
  );
};

export default App;
