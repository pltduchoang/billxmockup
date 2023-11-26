import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements';
//import screens
import HomeMonthView from './src/screens/HomeMonthView';
import HomeAllTime from './src/screens/HomeAllTime';
import CategoryOverview from './src/screens/CategoryOverview';
import CategoryMange from './src/screens/CategoryManage';
import AccountOverView from './src/screens/AccountOverview';
import AccountManage from './src/screens/AccountManage';
import BudgetExpense from './src/screens/BudgetExpense';
import BudgetManage from './src/screens/BudgetManage';
import SettingApp from './src/screens/SettingApp';
import SettingAccount from './src/screens/SettingAccount';


const HomeTab = createMaterialTopTabNavigator();
function HomeTabScreen() {
  return (
    <HomeTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#9BBEC8",
      tabBarInactiveTintColor: "#DDF2FD",
      tabBarLabelStyle: {fontSize: 12},
      tabBarStyle: {backgroundColor: "#427D9D"},
      tabBarIndicatorStyle: {
        backgroundColor: "#164863",
        height: 5,
      },
    }}>
      <HomeTab.Screen 
      name="HomeMonthView" 
      component={HomeMonthView} 
      options={{title:"Monthly"}}
      />
      <HomeTab.Screen 
      name="HomeAllTime" 
      component={HomeAllTime}
      options={{title:"All Time"}} />
    </HomeTab.Navigator>
  );
}

const CategoryTab = createMaterialTopTabNavigator();
function CategoryTabScreen() {
  return (
    <CategoryTab.Navigator>
      <CategoryTab.Screen 
      name="CategoryOverview" 
      component={CategoryOverview} 
      options={{title:"Overview"}}
      />
      <CategoryTab.Screen 
      name="CategoryMange" 
      component={CategoryMange}
      options={{title:"Manage"}} />
    </CategoryTab.Navigator>
  );
}


const AccountTab = createMaterialTopTabNavigator();
function AccountTabScreen() {
  return (
    <AccountTab.Navigator>
      <AccountTab.Screen 
      name="AccountOverView" 
      component={AccountOverView} 
      options={{title:"Overview"}}
      />
      <AccountTab.Screen 
      name="AccountManage" 
      component={AccountManage}
      options={{title:"Manage"}} />
    </AccountTab.Navigator>
  );
}


const BudgetTab = createMaterialTopTabNavigator();
function BudgetTabScreen() {
  return (
    <BudgetTab.Navigator>
      <BudgetTab.Screen 
      name="BudgetExpense" 
      component={BudgetExpense} 
      options={{title:"Expense/Saving"}}
      />
      <BudgetTab.Screen 
      name="BudgetManage" 
      component={BudgetManage}
      options={{title:"Manage"}} />
    </BudgetTab.Navigator>
  );
} 


const SettingTab = createMaterialTopTabNavigator();
function SettingTabScreen() {
  return (
    <SettingTab.Navigator>
      <SettingTab.Screen 
      name="SettingApp" 
      component={SettingApp} 
      options={{title:"App"}}
      />
      <SettingTab.Screen 
      name="SettingAccount" 
      component={SettingAccount}
      options={{title:"Account"}} />
    </SettingTab.Navigator>
  );
} 


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={
        {
          tabBarActiveTintColor: "#9BBEC8",
          tabBarInactiveTintColor: "#DDF2FD",
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {height: 80},
          tabBarActiveBackgroundColor: "#164863",
          tabBarInactiveBackgroundColor: "#427D9D",
          tabBarIconStyle: {height: 50, width: 50},
          
        }
      }>
        <Tab.Screen 
        name="Home" 
        component={HomeTabScreen}
        options={{
          title: "Dash Board", 
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
            name="home"
            type="font-awesome"
            color={focused ? "#9BBEC8" : "#DDF2FD"}
            size={30}
            />
          ),
        }}
          />
        <Tab.Screen 
        name="Category"
        component={CategoryTabScreen}
        options={{title: "Category", headerShown: false}} />
        <Tab.Screen name="Account"
        component={AccountTabScreen}
        options={{title: "Account", headerShown: false}} />
        <Tab.Screen 
        name="Budget" 
        component={BudgetTabScreen}
        options={{title:"Budget", headerShown: false}} />
        <Tab.Screen 
        name="Setting" 
        component={SettingTabScreen}
        options={{title:"Settings", headerShown:false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

