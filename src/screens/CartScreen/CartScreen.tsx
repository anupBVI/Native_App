import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './Styles';

const CartScreen = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      subtitle: 'Product 1 subtitle',
      price: '$10',
      quantity: 2,
      image: require('../../assets/Images/Frame1.png'),
    },
    {
      id: 2,
      name: 'Product 2',
      subtitle: 'Product 2 subtitle',
      price: '$20',
      quantity: 1,
      image: require('../../assets/Images/Frame1.png'),
    },
    {
      id: 3,
      name: 'Product 1',
      subtitle: 'Product 1 subtitle',
      price: '$10',
      quantity: 2,
      image: require('../../assets/Images/Frame1.png'),
    },
    {
      id: 4,
      name: 'Product 2',
      subtitle: 'Product 2 subtitle',
      price: '$20',
      quantity: 1,
      image: require('../../assets/Images/Frame1.png'),
    },
    {
      id: 5,
      name: 'Product 1',
      subtitle: 'Product 1 subtitle',
      price: '$10',
      quantity: 2,
      image: require('../../assets/Images/Frame1.png'),
    },
    {
      id: 6,
      name: 'Product 2',
      subtitle: 'Product 2 subtitle',
      price: '$20',
      quantity: 1,
      image: require('../../assets/Images/Frame1.png'),
    },
    // Add more items as needed
  ];

  const renderItem = ({item}: any) => (
    <View style={styles.itemContainer}>
      <View style={styles.leftSection}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.count}>
            <Icon name="remove" size={20} color="gray" />
          </Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.count}>
            <Icon name="add" size={20} color="gray" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartHeading}>My Cart</Text>

      <ScrollView style={{flex: 1, marginBottom: 20}}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        {/* Cart Summary */}
        <View style={styles.cartSummary}>
          <View style={styles.row}>
            <Text style={styles.summaryTitle}>Subtotal</Text>
            <Text style={styles.summaryValue}>$50</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.summaryTitle}>Shipping</Text>
            <Text style={styles.summaryValue}>$5</Text>
          </View>
          <View style={[styles.row, styles.rowLastChild]}>
            <Text style={styles.summaryTitle}>Bag Total</Text>
            <Text style={styles.summaryValue}>$55</Text>
          </View>
        </View>
      </ScrollView>
      {/* Proceed to Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
