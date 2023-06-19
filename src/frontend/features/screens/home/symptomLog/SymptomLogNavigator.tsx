import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainSymptomPage from "./MainSymptomPage";
import MentalHealthSymptomPage from "./MentalHealthSymptomPage";
import TreatmentsAndCareSymptomPage from "./TreatmentsAndCareSymptomPage";
import LifestyleTrackingSymptomPage from "./LifestyleTrackingSymptomPage";
import { SymptomLogProvider } from "./SymptomLogProvider";

export type SymptomLogParamList = {
  MAIN: undefined;
  MENTAL_HEALTH: undefined;
  TREATMENTS_CARE: undefined;
  PAIN_TRACKING: undefined;
  LIFESTYLE_TRACKING: undefined;
};

const SymptomLogStack = createNativeStackNavigator<SymptomLogParamList>();

export default function SymptomLogNavigator() {
  return (
    <SymptomLogProvider>
      <SymptomLogStack.Navigator initialRouteName="MAIN">
        <SymptomLogStack.Screen
          name="MAIN"
          component={MainSymptomPage}
          options={{ headerShown: false }}
        />

        <SymptomLogStack.Screen
          name="MENTAL_HEALTH"
          component={MentalHealthSymptomPage}
          options={{ headerShown: false }}
        />

        <SymptomLogStack.Screen
          name="TREATMENTS_CARE"
          component={TreatmentsAndCareSymptomPage}
          options={{ headerShown: false }}
        />

        <SymptomLogStack.Screen
          name="LIFESTYLE_TRACKING"
          component={LifestyleTrackingSymptomPage}
          options={{ headerShown: false }}
        />

        {/* <SymptomLogStack.Screen 
      name="PAIN_TRACKING" 
      component={PainTrackingNavigator} 
      options={{ headerShown: false }} 
    /> */}
      </SymptomLogStack.Navigator>
    </SymptomLogProvider>
  );
}
