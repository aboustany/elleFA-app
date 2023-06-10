import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ProfilePage from './ProfilePage';
// import SecurityPage from './SecurityPage';
// import GoalsPage from './GoalsPage';
// import HelpPage from './HelpPage';
import GoalSettingStack from "../../../goalSetting/GoalSettingStack"
import AccountManagement from "./AccountManagement";

export type SettingsStackParamList = {
  ACCOUNT_MANAGEMENT: undefined;
  PROFILE_PAGE: undefined;
  SECURITY_PAGE: undefined;
  GOALS_PAGE: undefined;
  HELP_PAGE: undefined;
};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

export function SettingsStackNavigator() {
  return (
    <SettingsStack.Navigator initialRouteName="ACCOUNT_MANAGEMENT">
      <SettingsStack.Screen 
        name="ACCOUNT_MANAGEMENT" 
        component={AccountManagement} 
        options={{ headerShown: false }} 
      />

      {/* <SettingsStack.Screen 
        name="PROFILE_PAGE" 
        component={ProfilePage} 
        options={{ headerShown: false }} 
      /> */}

      {/* <SettingsStack.Screen 
        name="SECURITY_PAGE" 
        component={SecurityPage} 
        options={{ headerShown: false }} 
      /> */}

      <SettingsStack.Screen 
        name="GOALS_PAGE" 
        component={GoalSettingStack} 
        options={{ headerShown: false }} 
      />

      {/* <SettingsStack.Screen 
        name="HELP_PAGE" 
        component={HelpPage} 
        options={{ headerShown: false }} 
      /> */}
    </SettingsStack.Navigator>
  );
}
