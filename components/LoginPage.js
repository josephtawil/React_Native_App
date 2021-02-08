import React,{useState} from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'

const LoginPage = ({navigation}) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const login = () => {
    if(username === 'Joseph' && password === "fufu" ){
        navigation.navigate('Home');
    }
}
    return (
        <View>
            <Text>Login Page</Text>
            <TextInput style={styles.input} value={username} placeholder="Enter Username" onChangeText={username => setUsername(username)}/>
            <TextInput secureTextEntry={true} style={styles.input} value={password} placeholder="Enter Password" onChangeText={password => setPassword(password)}/>
            <Button title="Sign Up" onPress={login}/>

            {/* <Button title="Go Back" onPress={()=> navigation.goBack()}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      margin: 20,
      height: 40,
      padding: 10,
      borderColor: 'black',
      borderWidth: 1
    },
});

export default LoginPage
