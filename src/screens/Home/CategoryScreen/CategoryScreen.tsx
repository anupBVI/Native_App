import React, {useState} from 'react';
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

const CategoryScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');

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
          style={styles.textInput}
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>

      <FlatList
        data={CategoryData}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default CategoryScreen;
