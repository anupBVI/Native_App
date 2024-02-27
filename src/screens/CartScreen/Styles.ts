import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
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
  //     //     overflow: 'hidden',
  //     //     backgroundColor: 'white',
  // elevation: 3,
  // shadowColor: 'black',
  // shadowOffset: { width: 0, height: 2 },
  // shadowOpacity: 0.2,
  // shadowRadius: 2,
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
    color: 'black',
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
    // borderColor : "red",
    // borderWidth : 1,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
    fontSize: 18,
    marginHorizontal: 5,
    color: 'black',
  },
  count: {
    color: 'black',
    fontSize: 18,
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
    color: 'black',
  },

  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
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
