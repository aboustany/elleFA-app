import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './home/HomeStackNavigator';
import PatternStackNavigator from './pattern/PatternStackNavigator'; 
import ResourcesStackNavigator from './resources/ResourcesStackNavigator'; 
import ForumStackNavigator from './forum/ForumStackNavigator'; 

export type AppNavigatorParamList = {
  HOME: undefined;
  PATTERN: undefined;
  RESOURCES: undefined;
  FORUM: undefined;
}; 
 
const Tab = createBottomTabNavigator<AppNavigatorParamList>();

const AppNavigator = () => (
  <Tab.Navigator initialRouteName="HOME">
    <Tab.Screen name="HOME" component={HomeStackNavigator} />
    <Tab.Screen name="PATTERN" component={PatternStackNavigator} />
    <Tab.Screen name="RESOURCES" component={ResourcesStackNavigator} />
    <Tab.Screen name="FORUM" component={ForumStackNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
