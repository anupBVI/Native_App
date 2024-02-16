import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CategoryMenu from '../../../components/CategoryMenu/CategoryMenu';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({navigation}: any) => {
  const redirect = useNavigation();
  const navigateToCategories = () => {
    navigation.navigate('CategoryScreen');
  };

  const navigateToProducts = () => {
    navigation.navigate('ProductsScreen');
  };

  const navigateToProductDetails = () => {
    navigation.navigate('ProductDetailsScreen');
  };

  const navigateToReviews = () => {
    navigation.navigate('ReviewScreen');
  };

  const categories = [
    {
      icon: <Foundation name={'burst-new'} size={40} color={'white'} />,
      label: 'New Arrivals',
      timeline: '208 Products',
    },
    {
      icon: <FontAwesome5 name={'tshirt'} size={30} color={'white'} />,
      label: 'Cloths',
      timeline: '500 Products',
    },
    {
      icon: <Ionicons name={'bag-handle'} size={30} color={'white'} />,
      label: 'Bags',
      timeline: '300 Products',
    },
    {
      icon: (
        <MaterialCommunityIcons
          name={'shoe-sneaker'}
          size={40}
          color={'white'}
        />
      ),
      label: 'Shoes',
      timeline: '408 Products',
    },
    {
      icon: <Entypo name={'power-plug'} size={30} color={'white'} />,
      label: 'Electronics',
      timeline: '600 Products',
    },
    {
      icon: <MaterialCommunityIcons name={'ring'} size={40} color={'white'} />,
      label: 'Jewelry',
      timeline: '108 Products',
    },
  ];
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: any) => {
    setSearchText(text);
  };

  const [showSearch, setShowSearch] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text>
          HELLO
          <Ionicons
            name={'arrow-back-circle-sharp'}
            size={40}
            color={'black'}
            onPress={() => redirect.goBack()}
          />
        </Text>
        {!showSearch && (
          <Text>
            <Icon
              name={'search'}
              size={40}
              color={'black'}
              onPress={() => {
                setShowSearch(true);
              }}
            />
          </Text>
        )}
      </View>

      {showSearch && (
        <View style={styles.searchBox}>
          <Text>
            <Icon name={'search'} size={40} color={'gray'} />
          </Text>

          <TextInput
            placeholder="Search Products"
            style={styles.textInput}
            onChangeText={handleSearch}
            value={searchText}
          />
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.label}>Categories</Text>
        <View style={styles.menuContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} onPress={navigateToCategories}>
              <CategoryMenu
                icon={category.icon}
                label={category.label}
                timeline={category.timeline}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
