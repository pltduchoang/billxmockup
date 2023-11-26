import React from 'react';
import { SafeAreaView, View, Text, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { getSpendingData } from '../services/SpendingServices';
import { Card } from '@rneui/themed';


function HomeMonthView() {

  const [spendingData, setSpendingData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchSpendingData() {
    setLoading(true);
    const result = await getSpendingData();
    if (result.success) {
      setSpendingData(result.data);
    } else {
      // Handle error while fetching data
      console.error('Error fetching spending data:', result.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchSpendingData();
  }, []);

return (
    <SafeAreaView style={{ 
      flex: 1, 
      backgroundColor: "#427D9D",
      }}>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Welcome to Home Month View!</Text>
          {spendingData && spendingData.map((expense,index) => {
            <Card 
            key={index}
            >
              <Text>{expense.amount}</Text>
              <Text>{expense.category}</Text>
            </Card>
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default HomeMonthView;