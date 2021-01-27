import React,{Component} from 'react';
import {View, SafeAreaView} from 'react-native';


const App = () => {
  return (
    <SafeAreaView>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
      <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
    </SafeAreaView>
  )
}

export default App