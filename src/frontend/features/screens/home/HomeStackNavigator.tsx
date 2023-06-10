import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";
import PdfPage from './PdfPage';
import { SettingsStackNavigator } from './settings/SettingsStackNavigator';


export type HomeStackParamList = {
  HOMEPAGE: undefined;
  SETTINGS: undefined; 
  PDF_PAGE: undefined;
  
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

    <HomeStack.Screen 
      name="SETTINGS" 
      component={SettingsStackNavigator} 
      options={{ headerShown: false }} 
    />

    <HomeStack.Screen 
      name="PDF_PAGE" 
      component={PdfPage} 
      options={{ headerShown: false }} 
    />

  </HomeStack.Navigator> 
  );
}
