import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Amplify } from "aws-amplify";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SignOutButton from "../../components/SignOutButton.jsx";
import awsconfig from "../../../aws-exports";
Amplify.configure(awsconfig);

export default function GoalQuestions({ navigation }) {
  const [diagnosis, setDiagnosis] = useState("");
  const [workingWith, setWorkingWith] = useState("");
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(0));

  const diagnosis_choices = [
    { value: "suspect", text: "I want to see if I have endometriosis" },
    { value: "diagnosed", text: "I have been diagnosed with endometriosis" },
  ];

  function handleDiagnosisChoice(choice) {
    if (choice === diagnosis) {
      setDiagnosis("");
      setFadeAnim(new Animated.Value(0));
      setWorkingWith("");
    } else {
      setDiagnosis(choice);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }

  function handleWorkingWithChoice(choice) {
    setWorkingWith(choice);
  }

  function handleNext() {
    console.log(diagnosis);
    console.log(workingWith);
    navigation.navigate("MedicalHistory");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(210, 222, 254, 0.8)", "rgba(228, 205, 248, 0.8)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "120%",
          }}
        />

        <SignOutButton />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Goal Setting</Text>
          <Text style={styles.subtitle}>
            ElleFA is tailored to meet your personal needs. Please select your
            goal from the options below.
          </Text>
          <Text style={styles.subtitle}>
            Don’t worry, you can always update this goal later!
          </Text>
        </View>

        {diagnosis === ""
          ? diagnosis_choices.map((choice) => (
              <TouchableOpacity
                key={choice.value}
                style={styles.button}
                onPress={() => handleDiagnosisChoice(choice.value)}
              >
                <Text style={styles.choice}>{choice.text}</Text>
              </TouchableOpacity>
            ))
          : diagnosis_choices
              .filter((choice) => choice.value === diagnosis)
              .map((choice) => (
                <TouchableOpacity
                  key={choice.value}
                  style={styles.buttonSelected}
                  onPress={() => handleDiagnosisChoice(choice.value)}
                >
                  <Text style={styles.choice}>{choice.text}</Text>
                </TouchableOpacity>
              ))}

        {diagnosis !== "" && (
          <Animated.View
            style={{ ...styles.animatedContainer, opacity: fadeAnim }}
          >
            <Text style={styles.question}>Who are you working with?</Text>
            <TouchableOpacity
              style={
                workingWith === "clinician"
                  ? styles.secondQuestionButtonSelected
                  : styles.secondQuestionButton
              }
              onPress={() => handleWorkingWithChoice("clinician")}
            >
              <Text style={styles.choice}>I am working with a clinician</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                workingWith === "independent"
                  ? styles.secondQuestionButtonSelected
                  : styles.secondQuestionButton
              }
              onPress={() => handleWorkingWithChoice("independent")}
            >
              <Text style={styles.choice}>I am working independently</Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        <View style={styles.bottomContainer}>
          {workingWith !== "" && (
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.choice}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: 30,
    paddingTop: 30,
  },
  animatedContainer: {
    marginTop: 30,
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 125,
  },
  title: {
    fontFamily: "DMSerifDisplay",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 35,
    lineHeight: 48,
    letterSpacing: 0.03,
    color: "#000000",
    marginBottom: 25,
  },
  subtitle: {
    fontFamily: "Almarai",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.03,
    color: "#000000",
    marginBottom: 10,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  choice: {
    fontSize: 19,
    textAlign: "center",
    color: "#000000",
    fontFamily: "Almarai",
  },
  button: {
    height: 89,
    width: 283,
    backgroundColor: "#F7D7E3",
    padding: 7,
    borderRadius: 20,
    marginTop: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: "center",
    marginBottom: 10,
    // alignItems: 'center',
    flexDirection: "column",
  },
  buttonSelected: {
    height: 89,
    width: 283,
    backgroundColor: "rgba(238, 236, 255, 1)",
    padding: 7,
    borderRadius: 20,
    marginTop: 18,
    //  box-shadow: 'inset 0px 4px 6px rgba(0, 0, 0, 0.25)', how to do in react?
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: "center",
    marginBottom: 10,
    // alignItems: 'center',
    flexDirection: "column",
  },
  nextButton: {
    height: 40,
    width: 125,
    backgroundColor: "#F7D7E3",
    padding: 7,
    borderRadius: 58,
    marginTop: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: "center",
    marginBottom: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    justifyContent: "center",
  },
  secondQuestionButton: {
    height: 45,
    width: 283,
    borderRadius: 20,
    backgroundColor: "#F7D7E3",
    padding: 7,
    marginTop: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: "column",
  },
  secondQuestionButtonSelected: {
    height: 45,
    width: 283,
    borderRadius: 20,
    backgroundColor: "rgba(238, 236, 255, 1)",
    padding: 7,
    marginTop: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    justifyContent: "center",
    marginBottom: 10,
    flexDirection: "column",
  },
});
