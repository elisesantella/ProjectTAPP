import React, {Component} from 'react';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Load from './Load';
import Start from './Start';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';

//Creating stack Navigator for react navigation component
const Stack = createNativeStackNavigator();

//Creating the stacks for each page & removing default header
export default function App() 
{
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Load'> 
      <Stack.Screen
         options={{ headerShown: false }}
        name= "Load" component={Load}/>
        <Stack.Screen
         options={{ headerShown: false }}
        name= "Start" component={Start}/>
        <Stack.Screen
         options={{ headerShown: false }}
        name= "SignIn" component={SignIn}/>
        <Stack.Screen
         options={{ headerShown: false }}
        name= "CreateAccount" component={CreateAccount}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
  },
});