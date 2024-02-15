import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      marginBottom: 50,
    },
    buttonsContainer: {
      borderBlockColor : "2px solid green",
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '90%',
      position : "absolute",
      bottom : 30
    },  
    loginbutton: {
      backgroundColor: 'white',
      borderRadius: 6,
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginBottom: 20,
      borderBlockColor : "white"
  
    },
    signupbutton: {
      backgroundColor: "transparent",
      borderRadius: 6,
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginBottom: 20,
      borderWidth: 1, 
    borderColor: 'white', 
  
    },
    loginbuttonText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign : "center"
    },
    signupbuttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign : "center"
    },
  });