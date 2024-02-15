import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryCard from '../../../components/Card/CategoryCard/CategoryCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './Styles';
import {CategoryData} from '../../../data/CategoryData';
import ProductCard from '../../../components/Card/ProductCard/ProductCard';
import axios from 'axios';

const ProductsScreen = (props: any) => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';

    axios
      .get(apiUrl)
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const {route} = props;
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: any) => {
    setSearchText(text);
  };
  const renderCategoryItem = ({item}: any) => <ProductCard product={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerName}>{route?.params?.categoryName}</Text>
      </View>

      {/* <View style={styles.searchBox}>
        <Text>
          <Icon name={'search'} size={30} color={'gray'} />
        </Text>
        <TextInput
          placeholder="Search Products"
          style={styles.textInput}
          onChangeText={handleSearch}
          value={searchText}
        />
      </View> */}

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
        />
      )}
    </View>
  );
};

export default ProductsScreen;
