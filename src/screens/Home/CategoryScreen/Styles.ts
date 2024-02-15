import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
      display : 'flex',
      gap : 10
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
    searchBox: {
      backgroundColor: 'lightgray',
      borderRadius: 40,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 1,
      marginVertical : 10
    },
  
    textInput: {
      color: 'black',
      flex: 2,
      fontSize: 18,
    },
});
