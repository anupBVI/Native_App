import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  card: {
    height: 200,
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
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
  head: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    opacity: 1,
    textTransform : "capitalize"
  },
  subHead: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
