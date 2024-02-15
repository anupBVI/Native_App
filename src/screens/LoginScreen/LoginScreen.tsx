import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native-elements';
import {rulerStyles, styles} from './Styles';
import LargeButton from '../../components/Button/LargeButton/LargeButton';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleEmailChange = (text: any) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: any) => {
    setPassword(text);
  };

  const handleSubmit = ({navigation}: any) => {
    const data = {email, password};
    // Here you can implement your registration logic
    console.log('Submitted:', data);
    // Set submitted data to display below the form
    setSubmittedData(data);
    // Reset form after submission
    setEmail('');
    setPassword('');

    Alert.alert('Successfully registered');
  };

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.headerText}>
        <Text style={styles.title}>Welocome !</Text>
        <Text style={styles.subTitle}>
          Please Login or Signup to continue to our app.
        </Text>
      </View>

      <View style={{padding: 20}}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleEmailChange}
          value={email}
          keyboardType="email-address"
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry
        />

        <View style={styles.btnContainer}>
          <LargeButton
            label={'Login'}
            background={'black'}
            color={'white'}
            onPressHandler={() => navigation.navigate('RegisterScreen')}
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

        {/* {submittedData && (
          <View style={{marginTop: 20}}>
            <Text>Submitted Data:</Text>
            <Text>First Name: {submittedData.firstName}</Text>
            <Text>Last Name: {submittedData.lastName}</Text>
            <Text>Email: {submittedData.email}</Text>
            <Text>Password: {submittedData.password}</Text>
          </View>
        )} */}
      </View>
    </View>
  );
};

export default LoginScreen;
