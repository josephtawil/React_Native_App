import React,{Component, useState} from 'react';
import {StyleSheet, ScrollView,  TextInput, Text, View, SafeAreaView, Button} from 'react-native';
import Todo from './components/Todo';
//use uuid for keys

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput('');
  }
  return (
    <SafeAreaView>
      <View>
          <Text style={styles.firstLabel}>Let's Build a React Native App in One Day</Text>
      </View>

     <ScrollView>
     {todos.map(todo=>(
        <Todo title={todo}/>
      ))}
     </ScrollView>
     
      <TextInput style = { styles.todoInput} value={input} onChangeText={text => setInput(text)}/>
      <Button title="Add Button" onPress={addTodo}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonStyle:{
    borderWidth: 20
  },
  todoInput: {
    margin: 20,
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  firstLabel: {
    // backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default App