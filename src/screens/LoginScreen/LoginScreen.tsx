import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Image} from 'react-native-elements';
import {rulerStyles, styles} from './Styles';
import LargeButton from '../../components/Button/LargeButton/LargeButton';
import {useToast} from 'react-native-toast-notifications';

const LoginScreen = ({navigation}: any) => {
  const toast: any = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleEmailChange = (text: any) => {
    setEmail(text);
    setEmailError('');
    setPasswordError('');
  };

  const handlePasswordChange = (text: any) => {
    setPassword(text);
    setEmailError('');
    setPasswordError('');
  };

  const handleSubmit = () => {
    // Validate email
    if (!email) {
      setEmailError('Email is required');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
    }

    // Check credentials
    if (email === 'alex@yopmail.com' && password === 'Password@123') {
      toast.show('Login Successful', {
        type: 'success',
        placement: 'top',
        duration: 1000,
        offset: 30,
        animationType: 'slide-in',
      });

      navigation.navigate('ShopScreen');
    } else {
      toast.show('Incorrect Email or Password', {
        type: 'danger',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'slide-in',
      });
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.headerText}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subTitle}>
          Please Login or Signup to continue to our app.
        </Text>
      </View>

      <View style={{padding: 20}}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleEmailChange}
            value={email}
            placeholder="Enter Username or Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={[styles.textInput, {flex: 1}]}
              onChangeText={handlePasswordChange}
              value={password}
              placeholder="Enter Username or Email"
              placeholderTextColor="gray"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.visibilityIcon}
              onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'eye-slash' : 'eye'}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </View>

        <View style={styles.btnContainer}>
          <LargeButton
            label={'Login'}
            background={'black'}
            color={'white'}
            onPressHandler={handleSubmit}
          />

          <View style={rulerStyles.hrContainer}>
            <View style={rulerStyles.hrLine} />
            <Text style={rulerStyles.orText}>OR</Text>
            <View style={rulerStyles.hrLine} />
          </View>

          <LargeButton
            label={'Continue with Facebook'}
            background={'#3B5999'}
            color={'white'}
            onPressHandler={() => navigation.navigate('RegisterScreen')}
          />

          <LargeButton
            label={'Continue with Google'}
            border={'black'}
            background={'transparent'}
            color={'black'}
            onPressHandler={() => navigation.navigate('RegisterScreen')}
          />
          <LargeButton
            label={'Continue with Apple'}
            border={'black'}
            background={'transparent'}
            color={'black'}
            onPressHandler={() => navigation.navigate('RegisterScreen')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
