import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export type ForumStackParamList = {
  ForumPage: undefined;
  
  // TO BE ADDED
};


const ForumStack = createNativeStackNavigator<ForumStackParamList>();

export default function ForumStackNavigator () {
  return (
  <ForumStack.Navigator initialRouteName="ForumPage">
    {/* <ForumStack.Screen 
      name="ForumPage" 
      component={ForumPage} 
      options={{ headerShown: false }} 
    /> */}

   
  </ForumStack.Navigator> 
  );
}
