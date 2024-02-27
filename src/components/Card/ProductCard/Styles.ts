import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },

  cardContainer: {
    marginBottom: 4,
    paddingBottom: 6,
  },

  card: {
    height: 200,
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    padding : 20,
    backgroundColor : "white"
  },
  imageContainer: {},
  backgroundImage: {
    flex: 1,
    // resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'fill',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#313131',
    paddingVertical: 10,
    bottom: 0,
    opacity: 0.7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fav:{
    position: 'absolute',
    top : 4,
    right : 4,
    zIndex : 10
  },

  cardInfo: {
    alignItems: 'flex-start',
  },

  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    opacity: 1,
  },
  subTitle: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '400',
  },
  price: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
});
