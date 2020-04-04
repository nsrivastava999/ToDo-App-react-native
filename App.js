import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Eat', key: '1' },
    { text: 'Sleep', key: '2' },
    { text: 'Repeat', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {

    if(text.length>0){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    }
    else{
      Alert.alert("OOPS!","Write Something to Add!",[
        {text:"Understood"}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback 
      onPress = {() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler ={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
            <Text style={styles.info}>Click on any item to remove it from the list!</Text>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  info:{
    fontSize:15,
    padding:10,
  }
});