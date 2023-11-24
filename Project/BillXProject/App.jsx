// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';




// function Section({children, title}) {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeMonthView from './src/screens/HomeMonthView';
import HomeAllTime from './src/subscreens/HomeAllTime';
import AccountOverview from './src/screens/AccountOverview';
import AccountManage from './src/subscreens/AccountManage';
import BudgetExpense from './src/screens/BudgetExpense';
import BudgetSaving from './src/subscreens/BudgetSaving';
import CategoryOverView from './src/screens/CategoryOverView';
import CategoryManage from './src/subscreens/CategoryManage';
import SettingApp from './src/screens/SettingApp';



//Define the Stack Navigator for sub-tabs of Home screen
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeMonthView" component={HomeMonthView} />
      <HomeStack.Screen name="HomeAllTime" component={HomeAllTime} />
    </HomeStack.Navigator>
  );
}

//Define the Stack Navigator for sub-tabs of Account screen
const AccountStack = createStackNavigator();
function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="AccountOverview" component={AccountOverview} />
      <AccountStack.Screen name="AccountManage" component={AccountManage} />
    </AccountStack.Navigator>
  );
}

//Define the Stack Navigator for sub-tabs of Category screen
const CategoryStack = createStackNavigator();
function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="CategoryOverView" component={CategoryOverView} />
      <CategoryStack.Screen name="CategoryManage" component={CategoryManage} />
    </CategoryStack.Navigator>
  );
}


//Define the Stack Navigator for sub-tabs of Budget screen
const BudgetStack = createStackNavigator();
function BudgetStackScreen() {
  return (
    <BudgetStack.Navigator>
      <BudgetStack.Screen name="BudgetExpense" component={BudgetExpense} />
      <BudgetStack.Screen name="BudgetSaving" component={BudgetSaving} />
    </BudgetStack.Navigator>
  );
}

//Define the Stack Navigator for sub-tabs of Settings screen
const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingApp" component={SettingApp} />
    </SettingsStack.Navigator>
  );
}


// Define the Tab Navigator for the main screens
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Account" component={AccountStackScreen} />
        <Tab.Screen name="Budget" component={BudgetStackScreen} />
        <Tab.Screen name="Category" component={CategoryStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}