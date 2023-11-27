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

// Get current date
const currentDate = new Date();
// Get current month and year
const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
const currentYear = currentDate.getFullYear();

// Filter this month's spending and last month's spending
const thisMonthSpending = spendingData.filter((expense) => {
  const expenseDate = new Date(expense.time);
  const expenseMonth = expenseDate.getMonth() + 1;
  const expenseYear = expenseDate.getFullYear();
  return expenseMonth === currentMonth && expenseYear === currentYear;
});

const lastMonthSpending = spendingData.filter((expense) => {
  const expenseDate = new Date(expense.time);
  const expenseMonth = expenseDate.getMonth() + 1;
  const expenseYear = expenseDate.getFullYear();
  return (
    (expenseMonth === currentMonth - 1 && expenseYear === currentYear) ||
    (expenseMonth === 12 && currentMonth === 1 && expenseYear === currentYear - 1)
  );
});

return (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#164863' }}>
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#DDF2FD' }}>Welcome to Home Month View!</Text>
        <Text style={{ color: '#DDF2FD' }}>This month's record</Text>
        {thisMonthSpending.map((expense) => (
          <Card
            key={expense.id}
            containerStyle={{
              backgroundColor: expense.type === 'spend' ? '#427D9D' : '#9BBEC8',
              width: 300,
              height: 90,
              borderRadius: 10,
              borderColor: '#164863',
              borderWidth: 2,
              margin: 10,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#DDF2FD' }}>{expense.time}</Text>
            <Text style={{ color: '#DDF2FD' }}>{expense.amount}</Text>
            <Text style={{ color: '#DDF2FD' }}>{expense.category}</Text>
          </Card>
        ))}
        <Text style={{ color: '#DDF2FD', marginTop: 50, backgroundColor: '#9BBEC8', width: 400, textAlign: 'center'}}>Last month's record</Text>
        {lastMonthSpending.map((expense) => (
          <Card
            key={expense.id}
            containerStyle={{
              backgroundColor: expense.type === 'spend' ? '#427D9D' : '#9BBEC8',
              width: 300,
              height: 90,
              borderRadius: 10,
              borderColor: '#164863',
              borderWidth: 2,
              margin: 10,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#DDF2FD' }}>{expense.time}</Text>
            <Text style={{ color: '#DDF2FD' }}>{expense.amount}</Text>
            <Text style={{ color: '#DDF2FD' }}>{expense.category}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  </SafeAreaView>
);
}

export default HomeMonthView;