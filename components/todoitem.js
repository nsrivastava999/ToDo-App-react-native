import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.listItem} >{item.text}</Text>
          <MaterialIcons name='delete' size={20} />
      </View>
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
    fontSize:18,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  listItem:{
    padding:5,
    fontSize:18,
  }
});
