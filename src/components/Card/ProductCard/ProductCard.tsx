import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useToast} from 'react-native-toast-notifications';

interface PProps {
  product: {
    id?: string | Number;
    title: string;
    description: string;
    price: string;
    image: any;
  };
}

const ProductCard = (props: PProps) => {
  const toast: any = useToast();
  const {product} = props;

  // console.log('product id', product.id);
  const navigation: any = useNavigation();
  const [fav, setFav] = useState(false);

  const navigateToProductsScreen = () => {
    navigation.navigate('ProductDetailsScreen', {
      product: product,
    });
  };

  const handleFavoritePress = (event: any) => {
    event.stopPropagation();

    toast.show(fav ? 'Removed from favourites' : 'Added to Favourites', {
      type: 'success',
      placement: 'top',
      duration: 1000,
      offset: 30,
      animationType: 'slide-in',
    });

    setFav(!fav);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToProductsScreen}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <ImageBackground
              //   source={require('../../../assets/Images/Frame1.png')}
              source={{uri: product.image}}
              alt="No image"
              style={styles.backgroundImage}></ImageBackground>

            <TouchableOpacity onPress={handleFavoritePress} style={styles.fav}>
              <Text>
                <Icon
                  name={fav ? 'favorite' : 'favorite-border'}
                  size={30}
                  color={'black'}
                />
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.subTitle}>Lorem ipsum dolor sit.</Text>
            <Text style={styles.price}>$ {product.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
