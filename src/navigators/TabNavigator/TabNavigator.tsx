import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import CartScreen from '../../screens/CartScreen/CartScreen';
import AccountScreen from '../../screens/AccountScreen/AccountScreen';
import OrderScreen from '../../screens/OrderScreen/OrderScreen';
import HomeScreenNavigator from '../HomeScreenNavigator/HomeScreenNavigator';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  const tabOptions: any = {
    HomeScreen: {iconName: 'home', tabName: 'Home'},
    CartScreen: {iconName: 'shopping-cart', tabName: 'Cart'},
    AccountScreen: {iconName: 'person', tabName: 'Profile'},
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
                  // size={tabName ==="Account" ? 34 :size}
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
      <Tab.Screen
        options={{
          headerShown: true,
          headerStyle: {
            // borderBottomColor: 'red',
            // borderBottomWidth: 2,
            backgroundColor:"white",
            // elevation: 4,

            elevation: 3,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 2,
          },
          title: 'My Profile',
          headerLeft: () => (
            <View style={{paddingLeft: 10}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
        name="AccountScreen"
        component={AccountScreen}
      />
      <Tab.Screen name="OrderScreen" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
