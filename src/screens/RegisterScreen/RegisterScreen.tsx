import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {View, Text, TextInput, Alert, ScrollView} from 'react-native';
import {Image} from 'react-native-elements';
import {styles} from './Styles';
import {CheckBox} from 'react-native-elements/dist/checkbox/CheckBox';
import LargeButton from '../../components/Button/LargeButton/LargeButton';

const RegisterScreen = ({navigation}: any) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState<any>(false);

  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleUserName = (text: any) => {
    setUserName(text);
  };

  const handleEmail = (text: any) => {
    setEmail(text);
  };

  const handlePassword = (text: any) => {
    setPassword(text);
  };

  const handleConfirmPassword = (text: any) => {
    setConfirmPassword(text);
  };
  const handleCheckbox = () => {
    setTermsAccepted(!termsAccepted); // Toggle checkbox state
  };

  const handleSubmit = ({navigation}: any) => {
    if (!termsAccepted) {
      Alert.alert('Please accept the terms and conditions');
      return;
    }

    const data = {userName, email, password, confirmPassword, termsAccepted};
    // Here you can implement your registration logic
    // console.log('Submitted:', data);
    setSubmittedData(data);
    setUserName('');
    setEmail('');
    setConfirmPassword('');
    setPassword('');
    setTermsAccepted('');

    Alert.alert('Successfully registered');
  };

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.headerText}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>Create an account. </Text>
      </View>

      {submittedData && (
        <View style={{marginTop: 20}}>
          <Text>Submitted Data:</Text>
          <Text>First Name: {submittedData.userName}</Text>
          <Text>Email: {submittedData.email}</Text>
          <Text>Last Name: {submittedData.password}</Text>
          <Text>Password: {submittedData.confirmPassword}</Text>
          <Text>
            Checkbox: {submittedData.termsAccepted ? 'true' : 'false'}
          </Text>
        </View>
      )}

      <View style={styles.formContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>User Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleUserName}
            value={userName}
            placeholder="Enter Username"
            placeholderTextColor="gray"
          />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleEmail}
            value={email}
            placeholder="Enter Your Email"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handlePassword}
            value={password}
            placeholder="Enter Password"
            placeholderTextColor="gray"
            secureTextEntry
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}> Confirm Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={handleConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox checked={termsAccepted} onIconPress={handleCheckbox} />
          <Text style={styles.checkboxLabel}>
            Agree with our Terms & Conditions.
          </Text>
        </View>

        <LargeButton
          label={'Register'}
          border={'black'}
          background={'black'}
          color={'white'}
          onPressHandler={() => navigation.navigate('SuccessScreen')}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
