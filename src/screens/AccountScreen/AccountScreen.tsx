import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './Styles';

const AccountScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="black" />
          <Text style={styles.headerText}>My Account</Text>
        </TouchableOpacity>
      </View>
      {/* Section 1: Profile Card */}
      <View style={styles.card}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../../assets/Images/Frame1.png')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
          </View>
        </View>
      </View>

      {/* Section 2: Profile Options */}
      <View style={styles.card}>
        <OptionItem iconName="person-outline" optionName="Personal Details" />
        <OptionItem iconName="cart-outline" optionName="My Orders" />
        <OptionItem iconName="card-outline" optionName="My Cards" />
        <OptionItem iconName="location-outline" optionName="Shipping Address" />
        <OptionItem iconName="heart-outline" optionName="Favourites" />
        <OptionItem iconName="settings-outline" optionName="Settings" />
      </View>

      {/* Section 3: Other Options */}
      <View style={styles.card}>
        <OptionItem iconName="help-circle-outline" optionName="FAQs" />
        <OptionItem
          iconName="lock-closed-outline"
          optionName="Privacy Policy"
        />
        <OptionItem
          iconName="document-text-outline"
          optionName="Terms and Conditions"
        />
      </View>
    </View>
  );
};

const OptionItem = ({iconName, optionName}: any) => {
  return (
    // <View style={styles.optionContainer}>
    //   <TouchableOpacity style={styles.option}>
    //     <Icon name={iconName} size={24} color="black" style={styles.icon} />
    //     <Text style={styles.optionText}>{optionName}</Text>
    //   </TouchableOpacity>
    //   <Icon
    //     name="chevron-forward-outline"
    //     size={24}
    //     color="black"
    //     style={styles.forwardIcon}
    //   />
    // </View>

    <TouchableOpacity style={styles.optionContainer2}>
      <View style={styles.optionContainerLeft}>
        <View style={styles.leftIcon}>
          <Icon name={iconName} size={24} color="black" />
        </View>
        <View style={styles.leftText}>
          <Text style={styles.optionText}>{optionName}</Text>
        </View>
      </View>
      <View style={styles.optionContainerRight}>
        <View style={styles.rightIcon}>
          <Icon name="chevron-forward-outline" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccountScreen;
