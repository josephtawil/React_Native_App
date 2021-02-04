import React,{Component, useState, useEffect} from 'react';
import {StyleSheet, Dimensions, ScrollView,  TextInput, Text, View, SafeAreaView, Button} from 'react-native';
import Graph from './components/Graph'
import moment from 'moment';

//use uuid for keys

const App = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [labels, setLabels] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [dataPoints, setDataPoints] = useState([
    {
      date: moment().format('LL'), amount: 2000
    },
    {
      date: moment().subtract(1,'days').format('LL'), amount: 2000
    },
    {
      date: moment().subtract(2, 'days').format('LL'), amount: 3000
    },
    {
      date: moment().subtract(3, 'days').format('LL'), amount: 4000
    },
    {
      date: moment().subtract(4, 'days').format('LL'), amount: 5000
    }
  ]);

  const [transformedData, setTransformedData] = useState([]);
  useEffect(() => {
    setTransformedData(transformData(groupBy(dataPoints, 'date')));
  },[dataPoints]);


  const groupBy = (array, key) => 
     array.reduce((rv,x)=>{
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    },{});
  

  const getDates = () =>  transformedData.map(pair => pair.date)

  const getAmounts = () => transformedData.map(pair => pair.amount)
    

  const transformData = (groupedData) => {
    const transformedArray = [];

    Object.entries(groupedData).forEach(entry => {
      // array of objects
      const total = entry[1].reduce((total, pair) => total + pair.amount, 0)
      transformedArray.push({date: entry[0], amount: total})
    })

    const sortedArray = transformedArray.sort((a,b)=> moment(a['date']).diff(moment(b['date'])));
  
    return sortedArray;
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
 
 

  useEffect(() =>{
    setTotalAmount(gigs.reduce((total, gig) =>  total + Number(gig.amount), 0)) ;
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

      <Graph dates={getDates()} data={getAmounts()}/>
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