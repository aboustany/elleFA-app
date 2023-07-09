import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";
import PdfPage from "./PdfPage";
import { SettingsStackNavigator } from "./settings/SettingsStackNavigator";
import DailyLogNavigator from "./dailyLog/DailyLogNavigator";

export type HomeStackParamList = {
  HOMEPAGE: undefined;
  SETTINGS: undefined;
  PDF_PAGE: undefined;
  DAILY_LOG: undefined;

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

      <HomeStack.Screen
        name="DAILY_LOG"
        component={DailyLogNavigator}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
