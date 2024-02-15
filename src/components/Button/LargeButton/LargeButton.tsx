import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const LargeButton = ({
  label,
  color,
  background,
  onPressHandler,
  border ,
}: any) => {
  const styles = StyleSheet.create({
    startButton: {
      width: '100%',
      backgroundColor: background,
      borderRadius: 36,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderWidth : border ? 1 : 0,
      borderBlockColor : border || "none"
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: color || "black",
      textAlign: 'center',
    },
  });
  return (
    <Pressable onPress={onPressHandler} style={styles.startButton}>
      <Text style={styles.text}> {label} </Text>
    </Pressable>
  );
};

export default LargeButton;
