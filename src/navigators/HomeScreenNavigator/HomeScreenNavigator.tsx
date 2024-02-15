import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen/HomeScreen';
import CategoryScreen from '../../screens/Home/CategoryScreen/CategoryScreen';
import ProductsScreen from '../../screens/Home/ProductsScreen/ProductsScreen';
import ProductDetailsScreen from '../../screens/Home/ProductDetailsScreen/ProductDetailsScreen';
import ReviewScreen from '../../screens/Home/ReviewScreen/ReviewScreen';

const HomeStack = createNativeStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <HomeStack.Screen
        name="CategoryScreen"
        options={{headerShown: true, title: ''}}
        component={CategoryScreen}
      />
      <HomeStack.Screen
        name="ProductsScreen"
        options={{headerShown: true, title: ''}}
        component={ProductsScreen}
      />
      {/* <HomeStack.Screen
        name="ProductDetailsScreen"
        options={{headerShown: false}}
        component={ProductDetailsScreen}
      /> */}
      <HomeStack.Screen
        name="ReviewScreen"
        options={{headerShown: false}}
        component={ReviewScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreenNavigator;
