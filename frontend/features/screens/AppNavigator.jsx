import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage.jsx';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen 
        name="HomePage" 
        component={HomePage} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator> 
  );
} 

const styles = StyleSheet.create({
    button: {
      borderRadius: 15, 
      padding: 10,
      marginLeft:5,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

export default AppNavigator;
