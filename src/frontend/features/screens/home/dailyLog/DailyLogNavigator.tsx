import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainSymptomPage from "./MainDailyLogPage";
import MentalHealthSymptomPage from "./MentalHealthSymptomPage";
import TreatmentsAndCareSymptomPage from "./TreatmentsAndCareSymptomPage";
import LifestyleTrackingSymptomPage from "./LifestyleTrackingSymptomPage";
import { DailyLogProvider } from "./DailyLogProvider";
import SymptomLogNavigator from "./symptomLog/SymptomLogNavigator";
import MainDailyLogPage from "./MainDailyLogPage";

export type DailyLogParamList = {
  MAIN_DAILYLOG: undefined;
  MENTAL_HEALTH: undefined;
  TREATMENTS_CARE: undefined;
  PAIN_TRACKING: undefined;
  LIFESTYLE_TRACKING: undefined;
  SYMPTOM_LOG: undefined;
};

const DailyLogStack = createNativeStackNavigator<DailyLogParamList>();

export default function DailyLogNavigator() {
  return (
    <DailyLogProvider>
      <DailyLogStack.Navigator initialRouteName="MAIN_DAILYLOG">
        <DailyLogStack.Screen
          name="MAIN_DAILYLOG"
          component={MainDailyLogPage}
          options={{ headerShown: false }}
        />

        <DailyLogStack.Screen
          name="MENTAL_HEALTH"
          component={MentalHealthSymptomPage}
          options={{ headerShown: false }}
        />

        <DailyLogStack.Screen
          name="TREATMENTS_CARE"
          component={TreatmentsAndCareSymptomPage}
          options={{ headerShown: false }}
        />

        <DailyLogStack.Screen
          name="LIFESTYLE_TRACKING"
          component={LifestyleTrackingSymptomPage}
          options={{ headerShown: false }}
        />

        <DailyLogStack.Screen
          name="SYMPTOM_LOG"
          component={SymptomLogNavigator}
          options={{ headerShown: false }}
        />

        {/* <DailyLogStack.Screen 
      name="PAIN_TRACKING" 
      component={PainTrackingNavigator} 
      options={{ headerShown: false }} 
    /> */}
      </DailyLogStack.Navigator>
    </DailyLogProvider>
  );
}
