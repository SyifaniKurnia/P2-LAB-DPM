import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const TextComponent = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>Tugas_P2</Text>
      <Text style={styles.name}>Syifani Kurnia Mora</Text>
      <Text style={styles.npm}>223510343</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,  
  },
  text: {
    fontSize: 24,      
    color: 'blue',     
    fontWeight: 'bold', 
  },
  name: {
    fontSize: 18,     
    color: 'blue',     
    marginTop: 5,
  },
  npm: {
    fontSize: 18,     
    color: 'blue',     
    marginTop: 5,
  },
});

export default TextComponent;
