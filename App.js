import React from 'react';
import Homepage from './components/Homepage';
import Messages from './components/Messages'
import LoginPage from './components/LoginPage';
import {SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//use uuid for keys
const Stack = createStackNavigator();

const App = () => {
  
  return(
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Login" component={LoginPage} options={{
          title: 'Sign Up',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}
export default App