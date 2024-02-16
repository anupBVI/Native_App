import {StyleSheet} from 'react-native';

const commonIconStyle: any = {
  backgroundColor: 'white',
  padding: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
};
const flexRow: any = {
  display: 'flex',
  flexDirection: 'row',
};

export const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  wrapper: {
    backgroundColor: '#E8E9EB',
  },
  top: {
    height: '44%',
  },
  icon1: {
    ...commonIconStyle,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  icon2: {
    ...commonIconStyle,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  icon3: {
    ...commonIconStyle,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },

  card: {
    height: 200,
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 30,
    paddingVertical: 40,
    backgroundColor: '#E8E9EB',
  },

  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'fill',
    overflow: 'hidden',
  },
  bottom: {
    height: '56%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 20,
    elevation: 20,
  },
  infoHeader: {
    ...flexRow,
    justifyContent: 'space-between',
  },
  infoHeaderLeft: {
    gap: 5,
  },
  pName: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  pSubName: {
    fontSize: 16,
    color: 'gray',
  },
  review: {
    flexDirection: 'row',
    gap: 4,
  },
  stars: {
    ...flexRow,
    alignItems: 'center',
  },
  reviewCount: {
    fontSize: 16,
    color: 'black',
  },
  infoHeaderRight: {
    gap: 6,
  },
  IncContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#E8E9EB',
    paddingHorizontal: 10,
  },
  countButton: {
    padding: 5,
  },
  countContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'lightgray',
    paddingHorizontal: 10,
  },
  count: {
    fontSize: 16,
  },
  stockText: {
    fontSize: 16,
    color: 'black',
  },

  sizeAndColors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // SIZE
  container: {
    marginVertical: 4,
    alignSelf: 'center',
  },
  sizeHeading: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginBottom: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  sizeButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSize: {
    backgroundColor: 'black',
    borderWidth: 0,
  },
  sizeText: {
    fontSize: 16,
    color: 'black',
  },
  selectedSizeText: {
    color: 'white',
  },

  // COLORS
  ColorCapsule: {
    marginVertical: 10,
    borderRadius: 40,
    backgroundColor: '#E8E9EB',
    paddingVertical: 10,
  },
  capsule: {
    flexDirection: 'column',
    borderRadius: 20,
    overflow: 'hidden',
    gap: 6,
  },
  colorOption: {
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectedColor: {
    elevation: 20,
  },

  productDescription: {gap: 6},

  descriptionTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  descriptionContent: {
    fontSize: 16,
    color: 'gray',
  },

  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  totalPriceContainer: {},
  totalPriceText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
  },
  totalPrice: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  addToCartButton: {
    borderRadius: 30,
    width: 200,
    backgroundColor: 'black',
    paddingVertical: 10,
    alignSelf: 'flex-end',
  },
  buttonContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  buttonText: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  iconStyle: {
    marginRight: 10,
  },
});
