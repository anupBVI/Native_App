import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {styles} from './Styles';

const ProductDetailsScreen = (props: any) => {
  const {route} = props;
  return (
    <>
      {/* <View>
        <Text>Product Detail Screen {route?.params?.product} </Text>
      </View> */}

      <View style={styles.wrapper}>
        <View style={styles.top}>
          <View style={styles.card}>
            <ImageBackground
              source={{
                uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
              }}
              // source={require('../../../assets/Images/Frame1.png')}
              alt="No image"
              style={styles.backgroundImage}></ImageBackground>

            <TouchableOpacity style={styles.icon1}>
              <Text>
                <AntIcon name={'leftcircle'} size={30} color={'black'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon2}>
              <Text>
                <Icon name={'favorite'} size={30} color={'black'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon3}>
              <Text>
                <Icon name={'favorite'} size={30} color={'black'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione
            voluptatum ipsam sed ea, voluptatem quas. Saepe perferendis,
            voluptatibus nesciunt neque earum consectetur?
          </Text>
        </View>
      </View>
    </>
  );
};

export default ProductDetailsScreen;
