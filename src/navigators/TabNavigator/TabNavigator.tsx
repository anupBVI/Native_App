import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text} from 'react-native';
import {styles} from './Styles';
import CartScreen from '../../screens/CartScreen/CartScreen';
import AccountScreen from '../../screens/AccountScreen/AccountScreen';
import OrderScreen from '../../screens/OrderScreen/OrderScreen';
import HomeScreenNavigator from '../HomeScreenNavigator/HomeScreenNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabOptions: any = {
    HomeScreen: {iconName: 'home', tabName: 'Home'},
    CartScreen: {iconName: 'shopping-cart', tabName: 'Cart'},
    AccountScreen: {iconName: 'person', tabName: 'Account'},
    OrderScreen: {iconName: 'menu', tabName: 'Orders'},
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const {iconName, tabName} = tabOptions[route.name] || {
            iconName: 'home',
            tabName: 'Home',
          };

          return (
            <View
              style={[styles.tabContainer, focused && styles.activeTabStyles]}>
              <View
                style={[
                  styles.tabIconContainer,
                  focused && styles.tabIconActive,
                ]}>
                <Icon
                  name={iconName ?? 'home'}
                  size={size}
                  color={focused ? 'white' : 'black'}
                />
              </View>
              {focused && (
                <View style={styles.tabTextContainer}>
                  <Text style={styles.tabText}>{tabName}</Text>
                </View>
              )}
            </View>
          );
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
