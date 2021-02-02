import React,{Component, useState} from 'react';
import {StyleSheet, ScrollView,  TextInput, Text, View, SafeAreaView, Button} from 'react-native';
import Todo from './components/Todo';
//use uuid for keys

const App = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [gisg, setGigs] = useState([
    {
      description: 'Freelance Job',
      amount: 400.00
    }
  ]);

  return (
    <SafeAreaView>
      <View>
          <Text style={styles.firstLabel}> 🍏 Income Tracker</Text>
      </View>

    
      <TextInput placeholder = "Enter description" keyboardType = "default"  style = { styles.todoInput} value={description} onChangeText={text => setDescription(text)}/>

      <TextInput placeholder = "Enter the amount you made" keyboardType = "numeric" style = { styles.todoInput} value={amount} onChangeText={text => setAmount(text)}/>
      {/* <Button title="Add Button" onPress={addTodo}/> */}
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