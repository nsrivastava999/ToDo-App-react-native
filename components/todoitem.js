import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    margin:10,
    borderColor: '#2eb8b8',
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 5,
    fontSize:18
  }
});
