import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export type PatternStackParamList = {
    PatternPage: undefined;
  
  // TO BE ADDED
};


const PatternStack = createNativeStackNavigator<PatternStackParamList>();

export default function PatternStackNavigator () {
  return (
  <PatternStack.Navigator initialRouteName="PatternPage">
    {/* <PatternStack.Screen 
      name="PatternPage" 
      component={PatternPage} 
      options={{ headerShown: false }} 
    /> */}

   
  </PatternStack.Navigator> 
  );
}
