import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResourcesPage from './ResourcesPage';


export type ResourcesStackParamList = {
    ResourcesPage: undefined;
  
  // TO BE ADDED
};


const ResourcesStack = createNativeStackNavigator<ResourcesStackParamList>();

export default function ResourcesStackNavigator () {
  return (
  <ResourcesStack.Navigator initialRouteName="ResourcesPage">
    <ResourcesStack.Screen 
      name="ResourcesPage" 
      component={ResourcesPage} 
      options={{ headerShown: false }} 
    />

   
  </ResourcesStack.Navigator> 
  );
}
