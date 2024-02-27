import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import StarRating from 'react-native-star-rating';

const ProductDetailsScreen = ({route}: any) => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  console.log('Detail', route.params.product.id);

  const [productData, setProductData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products/${route.params.product.id}`;

    axios
      .get(apiUrl)
      .then(response => {
        setProductData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  console.log('productData', productData);

  const handleColorSelection = (color: any) => {
    setSelectedColor(color);
  };
  const handleSizeSelection = (size: any) => {
    setSelectedSize(size);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
  return loading ? (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  ) : (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: productData.image,
            }}
            alt="No image"
            style={styles.backgroundImage}></ImageBackground>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.icon1}>
            <Text>
              <AntIcon name={'leftcircle'} size={30} color={'black'} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon2}>
            <Text>
              <Icon name={'favorite'} size={30} color={'black'} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon3}>
            <Text>
              <Icon name={'favorite'} size={30} color={'black'} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.infoHeader}>
          <View style={styles.infoHeaderLeft}>
            <Text style={styles.pName}>{productData?.title}</Text>
            <Text style={styles.pSubName}>{productData?.category}</Text>
            <View style={styles.review}>
              <View style={styles.stars}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={productData.rating.rate}
                  starSize={18}
                  fullStarColor="orange"
                  emptyStarColor="orange"
                  halfStarEnabled={true}
                />
              </View>
              <Text style={styles.reviewCount}>
                ({productData.rating.count}){' '}
              </Text>
            </View>
          </View>
          <View style={styles.infoHeaderRight}>
            <View style={styles.IncContainer}>
              <TouchableOpacity
                style={styles.countButton}
                onPress={decrementCount}>
                <Icon name="remove" size={20} color="gray" />
              </TouchableOpacity>
              <View style={styles.countContainer}>
                <Text style={styles.count}>{count}</Text>
              </View>
              <TouchableOpacity
                style={styles.countButton}
                onPress={incrementCount}>
                <Icon name="add" size={20} color="gray" />
              </TouchableOpacity>
            </View>
            <Text style={styles.stockText}>Available in stock</Text>
          </View>
        </View>

        {/* SIZE AND COLORS */}
        <View style={styles.sizeAndColors}>
          <View style={styles.container}>
            <Text style={styles.sizeHeading}>Sizes</Text>
            <View style={styles.sizeContainer}>
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.selectedSize,
                  ]}
                  onPress={() => handleSizeSelection(size)}>
                  <Text
                    style={[
                      styles.sizeText,
                      selectedSize === size && styles.selectedSizeText,
                    ]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.ColorCapsule}>
            <View style={styles.capsule}>
              {['green', 'black', 'red', 'blue'].map(color => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.colorOption,
                    {backgroundColor: color},
                    selectedColor === color && styles.selectedColor,
                  ]}
                  onPress={() => handleColorSelection(color)}>
                  {selectedColor === color && (
                    <Icon name="done" size={20} color="white" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Product Description */}
        <View style={styles.productDescription}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionContent}>
            {productData?.description}
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalPriceText}>Total Price</Text>
              <Text style={styles.totalPrice}>$ {productData.price}</Text>
            </View>

            <TouchableOpacity style={styles.addToCartButton}>
              <View style={styles.buttonContent}>
                <FeatherIcon name="shopping-cart" size={20} color="white" />
                <Text style={styles.buttonText}>Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
