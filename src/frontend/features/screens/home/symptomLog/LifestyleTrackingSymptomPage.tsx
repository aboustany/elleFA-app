import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import SignOutButton from "../../../../components/SignOutButton";
import { Ionicons } from "@expo/vector-icons";
import SafeViewAndroid from "../../../../components/SafeViewAndroid";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { SymptomLogContext } from "./SymptomLogContext";

const LifestyleTrackingSymptomPage = ({ navigation }) => {
  const [productivityLossVisible, setProductivityLossVisible] = useState(false);
  const [exerciseVisible, setExerciseVisible] = useState(false);
  const [alcoholVisible, setAlcoholVisible] = useState(false);
  const [energyVisible, setEnergyVisible] = useState(false);

  const [exercise, setExercise] = useState("None");
  const [productivityLoss, setProductivityLoss] = useState("None");
  const [alcohol, setAlcohol] = useState("None");
  const [energy, setEnergy] = useState("None");

  const { updateLogs, logs } = useContext(SymptomLogContext);

  const handleNextButtonClick = () => {
    console.log("LIFESTYLE RESULTS:", {
      exercise,
      productivityLoss,
      alcohol,
      energy,
    });

    updateLogs({ exercise, productivityLoss, alcohol, energy });
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
            <Text style={styles.headerText}>Lifestyle Tracking</Text>
          </View>
          <View style={styles.content}>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setExerciseVisible(!exerciseVisible)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Exercise</Text>
              </TouchableOpacity>
              {exerciseVisible && (
                <View style={styles.pickerContainer}>
                  <Text style={{ fontFamily: "Almarai_Light", fontSize: 17 }}>
                    How much did you exercise today?
                  </Text>
                  <Picker
                    selectedValue={exercise}
                    onValueChange={(itemValue) => setExercise(itemValue)}
                    style={{ height: 50, width: 150 }}
                  >
                    <Picker.Item label="None" value="None" />
                    <Picker.Item label="Light" value="Light" />
                    <Picker.Item label="Moderate" value="Moderate" />
                    <Picker.Item label="Intense" value="Intense" />
                  </Picker>
                </View>
              )}

              <TouchableOpacity
                onPress={() =>
                  setProductivityLossVisible(!productivityLossVisible)
                }
                style={styles.button}
              >
                <Text style={styles.buttonText}>Productivity Loss</Text>
              </TouchableOpacity>

              {productivityLossVisible && (
                <View style={styles.pickerContainer}>
                  <Text style={{ fontFamily: "Almarai_Light", fontSize: 17 }}>
                    Did you feel any loss of productivity today?
                  </Text>
                  <Picker
                    selectedValue={productivityLoss}
                    onValueChange={(itemValue) =>
                      setProductivityLoss(itemValue)
                    }
                    style={{ height: 50, width: 150 }}
                  >
                    <Picker.Item label="None" value="None" />
                    <Picker.Item label="Light" value="Light" />
                    <Picker.Item label="Moderate" value="Moderate" />
                    <Picker.Item label="Intense" value="Intense" />
                  </Picker>
                </View>
              )}

              <TouchableOpacity
                onPress={() => setAlcoholVisible(!alcoholVisible)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Alcohol</Text>
              </TouchableOpacity>

              {alcoholVisible && (
                <View style={styles.pickerContainer}>
                  <Text style={{ fontFamily: "Almarai_Light", fontSize: 17 }}>
                    How much alcohol did you consume today?
                  </Text>
                  <Picker
                    selectedValue={alcohol}
                    onValueChange={(itemValue) => setAlcohol(itemValue)}
                    style={{ height: 50, width: 150 }}
                  >
                    <Picker.Item label="None" value="None" />
                    <Picker.Item label="1-2 Drinks" value="1-2 Drinks" />
                    <Picker.Item label="3+ Drinks" value="3+ Drinks" />
                  </Picker>
                </View>
              )}

              <TouchableOpacity
                onPress={() => setEnergyVisible(!energyVisible)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Energy</Text>
              </TouchableOpacity>

              {energyVisible && (
                <View style={styles.pickerContainer}>
                  <Text style={{ fontFamily: "Almarai_Light", fontSize: 17 }}>
                    How were your energy levels today?
                  </Text>
                  <Picker
                    selectedValue={energy}
                    onValueChange={(itemValue) => setEnergy(itemValue)}
                    style={{ height: 50, width: 150 }}
                  >
                    <Picker.Item label="Low" value="Low" />
                    <Picker.Item label="Medium" value="Medium" />
                    <Picker.Item label="High" value="High" />
                  </Picker>
                </View>
              )}
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={handleNextButtonClick}
              style={styles.nextButton}
            >
              <Text style={styles.buttonText}>Done</Text>
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
  },
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontFamily: "DMSerifDisplay",
  },
  button: {
    height: 45,
    borderRadius: 58,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 174,
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
  pickerContainer: {
    alignItems: "center",
    marginTop: 20,
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
});

export default LifestyleTrackingSymptomPage;
