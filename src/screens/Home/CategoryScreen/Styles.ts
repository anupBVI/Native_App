import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    gap: 10,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  loaderContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchBox: {
    // backgroundColor: 'lightgray',
    backgroundColor: '#fff',

    borderRadius: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginVertical: 10,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textInput: {
    color: 'black',
    flex: 2,
    fontSize: 18,
  },
});
