import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from "react-native";
import SafeViewAndroid from "../../../../../components/SafeViewAndroid";
import { LinearGradient } from "expo-linear-gradient";
import { DailyLogContext } from "../DailyLogContext";
import { BackButton } from "@components/BackButton";

const BladderSymptomPage = ({ navigation }) => {
  const { updateLogs, logs } = useContext(DailyLogContext);
  const [urinationPain, setUrinationPain] = useState(false);
  const [incontinence, setIncontinence] = useState(false);
  const [bloodInUrine, setBloodInUrine] = useState(false);

  const [bladderSymptoms, setBladderSymptoms] = useState({
    urinationPain: false,
    incontinence: false,
    bloodInUrine: false,
  });

  const handleNextButtonClick = () => {
    setBladderSymptoms({
      urinationPain: urinationPain,
      incontinence: incontinence,
      bloodInUrine: bloodInUrine,
    });

    updateLogs({ bladderSymptoms });
    navigation.goBack();
  };

  return (
    <>
      <LinearGradient
        colors={["rgba(141, 128, 227, 0.6)", "#ffffff"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackButton />
            <Text style={styles.headerText}>Bladder Symptoms</Text>
          </View>
          <View style={styles.content}>
            <TouchableOpacity style={styles.switchContainer}>
              <Text style={styles.switchText}>Pain in Urination?</Text>
              <Switch onValueChange={setUrinationPain} value={urinationPain} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchContainer}>
              <Text style={styles.switchText}>Incontinence</Text>
              <Switch onValueChange={setIncontinence} value={incontinence} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchContainer}>
              <Text style={styles.switchText}>Blood in Urine</Text>
              <Switch onValueChange={setBloodInUrine} value={bloodInUrine} />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={handleNextButtonClick}
              style={styles.nextButton}
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    paddingHorizontal: 20,
  },
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 30,
    fontFamily: "DMSerifDisplay",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 30,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F7D7E3",
    borderRadius: 14,
    padding: 10,
    marginBottom: 40,
    width: "60%",
  },
  switchText: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Almarai",
    paddingLeft: 9,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    height: 45,
    borderRadius: 58,
    backgroundColor: "rgba(141, 128, 227, 0.8)",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 100,
    marginTop: 30,
    elevation: 4,
    marginBottom: 7,
  },
  buttonText: {
    fontSize: 19,
    textAlign: "center",
    color: "#000000",
    fontFamily: "DMSerifDisplay",
  },
});

export default BladderSymptomPage;