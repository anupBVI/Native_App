import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import CategoryCard from '../../../components/Card/CategoryCard/CategoryCard';
import {styles} from './Styles';
import {CategoryData} from '../../../data/CategoryData';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const CategoryScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');

  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products/categories';

    axios
      .get(apiUrl)
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  const handleSearch = (text: any) => {
    setSearchText(text);
  };
  const renderCategoryItem = ({item}: any) => <CategoryCard category={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Text>
          <Icon name={'search'} size={40} color={'gray'} />
        </Text>
        <TextInput
          placeholder="Search Categories"
          placeholderTextColor="gray"
          style={styles.textInput}
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>

      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default CategoryScreen;
