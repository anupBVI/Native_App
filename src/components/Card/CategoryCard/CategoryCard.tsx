import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';

interface CProps {
  category: {
    label: string;
    timeline: string;
    image: any;
  };
}

const CategoryCard = (props: CProps) => {
  const {category} = props;
  const navigation: any = useNavigation();
  const handleCategoryPress = () => {
    navigation.navigate('ProductsScreen');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductsScreen', {
            categoryName: category?.label,
          });
        }}>
        <View>
          <View style={styles.card}>
            <ImageBackground
              source={category?.image ?? ''}
              alt="No image"
              style={styles.backgroundImage}>
              <View style={styles.overlay}>
                <Text style={styles.head}>{category?.label}</Text>
                <Text style={styles.subHead}>{category?.timeline}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;
