import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Amplify } from "aws-amplify";
import {
  ScrollView,
  Switch,
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SignOutButton from "../../components/SignOutButton";
import { AuthContext } from "../authentication/AuthContext";
import awsconfig from "../../../aws-exports";
Amplify.configure(awsconfig);

export default function TrackingQuestions({ navigation }) {
  const { setGoalsSet } = useContext(AuthContext);

  const handleNext = () => {
    console.log();
    setGoalsSet(true);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(141, 128, 227, 0.6)", "#ffffff"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "120%",
        }}
      />

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.header}>What would you like to track?</Text>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: "space-between",
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    fontSize: 35,
    marginTop: 70,
    fontFamily: "DMSerifDisplay",
    fontWeight: "400",
    alignSelf: "center",
  },
  subtitleContainer: {
    alignSelf: "flex-start",
    marginLeft: 19,
    marginTop: 40,
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: "#BDA6DA",
    borderRadius: 58,
    justifyContent: "center",
  },
  subtitle: {
    fontFamily: "Almarai",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    letterSpacing: 0.03,
    color: "#000000",
    justifyContent: "center",
  },
  questionSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  switch: {
    marginLeft: 20,
  },
  question: {
    flex: 1,
    marginRight: 10,
  },
  nextButton: {
    height: 40,
    width: 150,
    backgroundColor: "#F7D7E3",
    padding: 7,
    borderRadius: 58,
    marginTop: 18,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: "center",
    marginBottom: 10,
  },
  nextButtonText: {
    fontSize: 19,
    textAlign: "center",
    color: "#000000",
    fontFamily: "Almarai",
  },
  bottomContainer: {
    padding: 20,
    justifyContent: "flex-end",
  },
});
