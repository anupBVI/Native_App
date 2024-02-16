import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

// const styles = StyleSheet.create({})
// export default CartScreen

// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
// } from 'react-native';

// const CartScreen = () => {
//   const cartItems = [
//     {
//       id: 1,
//       name: 'Product 1',
//       subtitle: 'Product 1 subtitle',
//       price: '$10',
//       quantity: 2,
//       image: require('./product1.jpg'),
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       subtitle: 'Product 2 subtitle',
//       price: '$20',
//       quantity: 1,
//       image: require('./product2.jpg'),
//     },
//     // Add more items as needed
//   ];

//   const renderItem = ({item}: any) => (
//     <View style={styles.itemContainer}>
//       <View style={styles.leftSection}>
//         <Image source={item.image} style={styles.image} />
//         <View>
//           <Text style={styles.name}>{item.name}</Text>
//           <Text style={styles.subtitle}>{item.subtitle}</Text>
//           <Text style={styles.price}>{item.price}</Text>
//         </View>
//       </View>
//       <View style={styles.rightSection}>
//         <TouchableOpacity style={styles.quantityButton}>
//           <Text>-</Text>
//         </TouchableOpacity>
//         <Text style={styles.quantity}>{item.quantity}</Text>
//         <TouchableOpacity style={styles.quantityButton}>
//           <Text>+</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.cartHeading}>My Cart</Text>
//       <FlatList
//         data={cartItems}
//         renderItem={renderItem}
//         keyExtractor={item => item.id.toString()}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//       />
//       {/* Cart Summary */}
//       <View style={styles.cartSummary}>
//         <View style={styles.row}>
//           <Text>Subtotal</Text>
//           <Text>$50</Text>
//         </View>
//         <View style={styles.row}>
//           <Text>Shipping</Text>
//           <Text>$5</Text>
//         </View>
//         <View style={styles.row}>
//           <Text>Bag Total</Text>
//           <Text>$55</Text>
//         </View>
//       </View>
//       {/* Proceed to Checkout Button */}
//       <TouchableOpacity style={styles.checkoutButton}>
//         <Text style={styles.checkoutText}>Proceed to Checkout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   cartHeading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   leftSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     marginRight: 10,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   price: {
//     fontSize: 16,
//   },
//   rightSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   quantityButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: 'lightgray',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   quantity: {
//     fontSize: 16,
//     marginHorizontal: 5,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: 'lightgray',
//     marginVertical: 10,
//   },
//   cartSummary: {
//     marginVertical: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   checkoutButton: {
//     backgroundColor: 'black',
//     borderRadius: 20,
//     paddingVertical: 15,
//     alignItems: 'center',
//   },
//   checkoutText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default CartScreen;

