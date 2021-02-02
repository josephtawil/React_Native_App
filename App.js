import React,{Component, useState, useEffect} from 'react';
import {StyleSheet, ScrollView,  TextInput, Text, View, SafeAreaView, Button} from 'react-native';
import Graph from './components/Graph'
import moment from 'moment';
import Todo from './components/Todo';
//use uuid for keys

const App = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [labels, setLabels] = useState([]);
  const [dataPoints, setDataPoints] = useState([
    {
      [moment()]: 2000
    },
    {
      [moment().subtract(1,'days')]: 2000
    },
    {
      [moment().subtract(2, 'days')]: 3000
    },
    {
      [moment().subtract(3, 'days')]: 4000
    },
    {
      [moment().subtract(4, 'days')]: 5000
    }
  ]);

  const getDates = () => {
    const dates = dataPoints.map(pair => Object.keys(pair)[0])
    return dates;
  }
  const getAmounts = () => {
    const amount = dataPoints.map(pair => Object.values(pair)[0])
    return amount;
  }

  const [gigs, setGigs] = useState([
    {
      description: 'Freelance Job',
      amount: 400.00,
      timestamp: new Date()
    },
    {
      description: 'Freelancer',
      amount: 700.00,
      timestamp: new Date()
    }
  ]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    
  }, [gigs])


  useEffect(() =>{
    const total = gigs.reduce((total, gig) =>{
      return total + Number(gig.amount)
    }, 0);

    setTotalAmount(total);
  }, [gigs]);

  const addGig =  () =>{
    setGigs([...gigs, { 
      description: description,
      amount: amount
    }]);

    setDescription('');
    setAmount('');
  }
  return (
    <SafeAreaView>
      <View>
          <Text style={styles.firstLabel}> 🍏 Income Tracker</Text>
      </View>

      <View>
        <Text> Total Income ${totalAmount}</Text>
      </View>
      <TextInput placeholder = "Enter description" keyboardType = "default"  style = { styles.input} value={description} onChangeText={text => setDescription(text)}/>

      <TextInput placeholder = "Enter the amount you made in USD 💰 " keyboardType = "numeric" style = { styles.input} value={amount} onChangeText={text => setAmount(text)}/>
      <Button disabled = {!amount && !description} title="Add Gig 🚀 " onPress={addGig}/>

      {gigs.map(gig=>(
        <View>
          <Text>
            {gig.description}
          </Text>
          <Text>
           ${gig.amount}
          </Text>
          <Text>

          </Text>
        </View>
      ))}

      <Graph dates={getDates} data={gigs}/>
    </SafeAreaView>
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
  firstLabel: {
    // backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default App