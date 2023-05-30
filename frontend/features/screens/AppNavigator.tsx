import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './home/HomeStackNavigator';
import PatternStackNavigator from './pattern/PatternStackNavigator'; // Import your actual components
import ResourcesStackNavigator from './resources/ResourcesStackNavigator'; // Import your actual components
import ForumStackNavigator from './forum/ForumStackNavigator'; // Import your actual components

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
