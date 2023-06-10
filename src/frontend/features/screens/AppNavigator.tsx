import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './home/HomeStackNavigator';
import PatternStackNavigator from './pattern/PatternStackNavigator'; 
import ResourcesStackNavigator from './resources/ResourcesStackNavigator'; 
import ForumStackNavigator from './forum/ForumStackNavigator'; 
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native';
import SafeViewAndroid from '../../components/SafeViewAndroid';


export type AppNavigatorParamList = {
  HOME: undefined;
  PATTERN: undefined;
  RESOURCES: undefined;
  FORUM: undefined;
}; 
 
const Tab = createBottomTabNavigator<AppNavigatorParamList>();

const AppNavigator = () => (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Tab.Navigator 
        initialRouteName="HOME" 
        screenOptions={{  
          tabBarStyle: { height: 60, padding: 8, paddingBottom: 8},
        }}
        >
        <Tab.Screen name="HOME" component={HomeStackNavigator} options={() => ({
              title: 'Home',
              tabBarIcon: ({color,size}) => (<Ionicons name="calendar" color={color} size={size} />),
              headerShown: false,
            })}/>

        <Tab.Screen name="PATTERN" component={PatternStackNavigator} options={() => ({
              title: 'Pattern',
              tabBarIcon: ({color,size}) => (<Ionicons name="stats-chart" color={color} size={size} />),
              headerShown: false,

            })}/>

        <Tab.Screen name="RESOURCES" component={ResourcesStackNavigator} options={() => ({
              title: 'Resources',
              tabBarIcon: ({color,size}) => (<Ionicons name="document" color={color} size={size} />),
              headerShown: false,

            })}/>

        <Tab.Screen name="FORUM" component={ForumStackNavigator} options={() => ({
              title: 'Forum',
              tabBarIcon: ({color,size}) => (<Ionicons name="chatbox-ellipses-outline" color={color} size={size} />),
              headerShown: false,

            })}/>
      </Tab.Navigator>
    </SafeAreaView>
  );

export default AppNavigator;
