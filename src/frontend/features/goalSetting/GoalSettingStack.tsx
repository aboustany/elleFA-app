import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalQuestions from './GoalQuestions';
import MedicalHistory from './MedicalHistory';
import ScreeningQuestions from './ScreeningQuestions';
import TrackingQuestions from './TrackingQuestions';

export type GoalSettingStackParamList = {
  GoalQuestions: undefined;
  MedicalHistory: undefined;
  ScreeningQuestions: undefined;
  TrackingQuestions: undefined;
};

const GoalSettingStack =
  createNativeStackNavigator<GoalSettingStackParamList>();

export default function GoalSetting() {
  return (
    
    <GoalSettingStack.Navigator initialRouteName="GoalQuestions">
      <GoalSettingStack.Screen
        name="GoalQuestions"
        component={GoalQuestions}
        options={{ headerShown: false }} 
      />

      <GoalSettingStack.Screen
        name="MedicalHistory"
        component={MedicalHistory}
        options={() => ({
          headerShown: false,
        })}
      />
      
      <GoalSettingStack.Screen
        name="ScreeningQuestions"
        component={ScreeningQuestions}
        options={() => ({
          headerShown: false,
        })}
      />

      <GoalSettingStack.Screen
        name="TrackingQuestions"
        component={TrackingQuestions}
        options={() => ({
          headerShown: false,
        })}
      />
      
    </GoalSettingStack.Navigator>
  );
}
