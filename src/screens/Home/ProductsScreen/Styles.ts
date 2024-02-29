import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    gap: 10,
  },
  headerName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textTransform : "capitalize"
  },
  headerContainer: {
    paddingHorizontal: 10,
  },
  loaderContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 10,
  },

  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  searchBox: {
    backgroundColor: 'lightgray',
    borderRadius: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginVertical: 10,
  },
  textInput: {
    color: 'black',
    flex: 2,
    fontSize: 16,
  },
});
