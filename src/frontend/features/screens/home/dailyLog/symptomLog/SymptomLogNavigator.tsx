import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeadSymptomPage from "./HeadSymptomPage";
import BreastSymptomPage from "./BreastSymptomPage";
import BowelSymptomPage from "./BowelSymptomPage";
import BladderSymptomPage from "./BladderSymptomPage";
import PelvicSymptomPage from "./PelvicSymptomPage";
import MainSymptomLogPage from "./MainSymptomLogPage";

export type SymptomLogParamList = {
  SYMPTOM_MAIN: undefined;
  HEAD_SYMPTOM: undefined;
  BREAST_SYMPTOM: undefined;
  BLADDER_SYMPTOM: undefined;
  BOWEL_SYMPTOM: undefined;
  PELVIC_SYMPTOM: undefined;
};

const SymptomLogStack = createNativeStackNavigator<SymptomLogParamList>();

export default function SymptomLogNavigator() {
  return (
    <SymptomLogStack.Navigator initialRouteName="SYMPTOM_MAIN">
      <SymptomLogStack.Screen
        name="SYMPTOM_MAIN"
        component={MainSymptomLogPage}
        options={{ headerShown: false }}
      />

      <SymptomLogStack.Screen
        name="HEAD_SYMPTOM"
        component={HeadSymptomPage}
        options={{ headerShown: false }}
      />

      <SymptomLogStack.Screen
        name="BREAST_SYMPTOM"
        component={BreastSymptomPage}
        options={{ headerShown: false }}
      />

      <SymptomLogStack.Screen
        name="BLADDER_SYMPTOM"
        component={BladderSymptomPage}
        options={{ headerShown: false }}
      />

      <SymptomLogStack.Screen
        name="BOWEL_SYMPTOM"
        component={BowelSymptomPage}
        options={{ headerShown: false }}
      />

      <SymptomLogStack.Screen
        name="PELVIC_SYMPTOM"
        component={PelvicSymptomPage}
        options={{ headerShown: false }}
      />
    </SymptomLogStack.Navigator>
  );
}
