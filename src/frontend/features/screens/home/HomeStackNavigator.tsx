import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";


export type HomeStackParamList = {
  HOMEPAGE: undefined;
  
  // TO BE ADDED
};


const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
  <HomeStack.Navigator initialRouteName="HOMEPAGE">
    <HomeStack.Screen 
      name="HOMEPAGE" 
      component={HomePage} 
      options={{ headerShown: false }} 
    />

    {/* <HomeStack.Screen 
      name="OTHERPAGE" 
      component={OtherPage} 
      options={{ headerShown: false }} 
    /> */}
  </HomeStack.Navigator> 
  );
}
