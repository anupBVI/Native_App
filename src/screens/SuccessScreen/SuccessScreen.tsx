import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import LargeButton from '../../components/Button/LargeButton/LargeButton';
import AntIcon from 'react-native-vector-icons/AntDesign';


const SuccessScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.icon}>
        <AntIcon name="checkcircleo" size={100} color={"green"}/>
        </Text>
        <Text style={styles.title}>Successfull !</Text>
        <Text style={styles.subtitle}>
          You have successfully registered on our app, Start shopping.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <LargeButton
          label={'Start Shopping'}
          background={'black'}
          color={'white'}
          onPressHandler={() => navigation.navigate('ShopScreen')}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;
