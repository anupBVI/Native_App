import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, ImageBackground, TouchableOpacity, Text} from 'react-native';
import {styles} from './Styles';

const SplashScreen = () => {
  const navigation: any = useNavigation();

  const handleLogin = () => {
    // Navigate to the login screen
    navigation.navigate('LoginScreen');
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };
  return (
    <ImageBackground
      source={require('../../assets/Images/Frame1.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.loginbutton} onPress={handleLogin}>
            <Text style={styles.loginbuttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupbutton}
            onPress={handleRegister}>
            <Text style={styles.signupbuttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
