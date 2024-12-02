import React from 'react';
import { View, StyleSheet } from 'react-native';

const Box = ({ color }) => {
  return <View style={[styles.box, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  box: {
    width: 100, 
    height: 100, 
  },
});

export default Box;