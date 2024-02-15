import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface MenuProps {
  icon: React.ReactNode;
  label: string;
  timeline: string;
}

const CategoryMenu = (props: MenuProps) => {
  const {icon, label, timeline} = props;
  return (
    <View style={styles.category}>
      <View style={styles.left}>
        <Text style={styles.icon}>
          {icon}
        </Text>
        <Text style={styles.name}>{label}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.number}>{timeline}</Text>
      </View>
    </View>
  );
};

export default CategoryMenu;
