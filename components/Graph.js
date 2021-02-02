import React from 'react'
import {StyleSheet, Dimensions,ScrollView,  TextInput, Text, View, SafeAreaView, Button} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
const Graph = ({data, dates}) => {
    return (
        <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [
                 data[0].amount,
                 data[1].amount
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
        //   yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "green",
            backgroundGradientTo: "blue",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    )
}

export default Graph
