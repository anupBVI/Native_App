import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  //   itemContainer: {
  //     //     flexDirection: 'row',
  //     //     justifyContent: 'space-between',
  //     //     alignItems: 'center',
  //     //     borderRadius: 10, // Adding border radius
  //     //     overflow: 'hidden', // Make sure content doesn't overflow rounded corners
  //     //     backgroundColor: 'white', // Setting background color to cover rounded corners
  //     //     elevation: 3, // Adding elevation for shadow effect (Android)
  //     //     shadowColor: 'black', // Adding shadow color (iOS)
  //     //     shadowOffset: { width: 0, height: 2 }, // Adding shadow offset (iOS)
  //     //     shadowOpacity: 0.2, // Adding shadow opacity (iOS)
  //     //     shadowRadius: 2, // Adding shadow radius (iOS)
  //     //   },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color : 'black'
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 16,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
  cartSummary: {
    marginVertical: 20,
    marginHorizontal: 4,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  rowLastChild: {
    borderBottomWidth: 0,
    borderBottomColor: 'lightgray',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color : 'black'
  },

  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color : 'black'
  },
  checkoutButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
