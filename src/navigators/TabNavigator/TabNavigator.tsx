import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './Styles';
import CartScreen from '../../screens/CartScreen/CartScreen';
import AccountScreen from '../../screens/AccountScreen/AccountScreen';
import OrderScreen from '../../screens/OrderScreen/OrderScreen';
import HomeScreenNavigator from '../HomeScreenNavigator/HomeScreenNavigator';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'CartScreen') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          } else if (route.name === 'AccountScreen') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'OrderScreen') {
            iconName = focused ? 'menu' : 'menu';
          }
          return <Icon name={iconName ?? 'home'} size={size} color={color} />;
        },
        tabBarStyle: styles.tabBarStyles,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreenNavigator} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
      <Tab.Screen name="OrderScreen" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
