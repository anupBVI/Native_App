import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  category: {
    // borderBlockColor: 'red',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    tintColor: 'white',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: 'white',
  },
  right: {
    display: 'flex',
    gap: 10,
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  number: {
    color: 'white',
  },
});
