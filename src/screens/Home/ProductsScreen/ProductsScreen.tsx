import {ActivityIndicator, FlatList, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {styles} from './Styles';
import ProductCard from '../../../components/Card/ProductCard/ProductCard';
import axios from 'axios';
import {Icon} from 'react-native-elements';

const ProductsScreen = (props: any) => {
  console.log('on pr', props?.route.params.categoryName);
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products/category/${props?.route?.params.categoryName}`;
    // const apiUrl = `https://fakestoreapi.com/products`
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
