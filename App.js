import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextComponent from './components/Text';
import Box from './components/Box';

const App = () => {
  return (
    <View style={styles.container}>
      <TextComponent />
      <View style={styles.boxContainer}>
        <Box color="#FFC0CB" /> 
        <Box color="#ADD8E6" /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
    backgroundColor: '#D3D3D3',
  },
  boxContainer: {
    flexDirection: 'row',         
    justifyContent: 'space-between', 
    width: '80%',
  },
});

export default App;
