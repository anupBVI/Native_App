import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {styles} from './Styles';
import {useNavigation} from '@react-navigation/native';

const ProductDetailsScreen = (props: any) => {
  const {route} = props;
  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

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
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.top}>
          <View style={styles.card}>
            <ImageBackground
              source={{
                uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
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
              <Text style={styles.pName}>Roller Rabbit</Text>
              <Text style={styles.pSubName}>Vodo Odelle Dress</Text>
              <View style={styles.review}>
                <View style={styles.stars}>
                  <Icon name="star" size={18} color="orange" />

                  <Icon name="star" size={18} color="orange" />
                  <Icon name="star" size={18} color="orange" />
                  <Icon name="star" size={18} color="orange" />
                  <Icon name="star" size={18} color="orange" />
                </View>
                <Text style={styles.reviewCount}>(332 Reviews) </Text>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo tenetur, culpa minima, hic quisquam quod earum
              excepturi deserunt ipsa et! Perferendis, reiciendis obcaecati.
            </Text>
          </View>

          <View style={styles.footerContainer}>
            <View style={styles.footer}>
              <View style={styles.totalPriceContainer}>
                <Text style={styles.totalPriceText}>Total Price</Text>
                <Text style={styles.totalPrice}>$99.99</Text>
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
    </>
  );
};

export default ProductDetailsScreen;
