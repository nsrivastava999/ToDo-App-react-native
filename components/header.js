import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ToDo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    
    paddingTop:35,
    paddingBottom: 20,
    backgroundColor: '#2eb8b8',
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});