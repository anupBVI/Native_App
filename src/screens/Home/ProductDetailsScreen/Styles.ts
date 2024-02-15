import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    // display: 'flex',
    // gap: 30,
    // paddingHorizontal: 30,
    // paddingVertical: 50,
    // height: '100%',

    backgroundColor: '#F3F8FF',
  },
  top: {
    height: '44%',
  },

  icon1: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  icon2: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  icon3: {
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

    // backgroundColor: 'white',
    backgroundColor: '#F3F8FF',
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

    // // Shadow properties for iOS
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // Elevation for Android
    elevation: 20,
  },
});
