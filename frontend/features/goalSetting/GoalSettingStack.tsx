import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalQuestions from './GoalQuestions.jsx';
// import MedicalHistory from './MedicalHistory';
// import ScreeningQuestions from './ScreeningQuestions';

export type GoalSettingStackParamList = {
  GoalQuestions: undefined;
  MedicalHistory: undefined;
  ScreeningQuestions: undefined;
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
      {/* <GoalSettingStack.Screen
        name="MedicalHistory"
        component={MedicalHistory}
        options={() => ({
        //   title: 'MedicalHistory',
          headerShown: false,
        })}
      />
      <GoalSettingStack.Screen
        name="ScreeningQuestions"
        component={ScreeningQuestions}
        options={() => ({
        //   title: 'ScreeningQuestions',
          headerShown: false,
        })}
      /> */}
      
      
    </GoalSettingStack.Navigator>
  );
}
