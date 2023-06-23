import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Switch,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SafeViewAndroid from "../../../../components/SafeViewAndroid";
import { SymptomLogContext } from "./SymptomLogContext";

const TreatmentsAndCareSymptomPage = ({ navigation }) => {
  const { updateLogs } = useContext(SymptomLogContext);
  const [startingIntervention, setStartingIntervention] = useState(false);
  const [endingIntervention, setEndingIntervention] = useState(false);
  const [hormonalContraceptives, setHormonalContraceptives] = useState("");
  const [fertilityTreatment, setFertilityTreatment] = useState("");
  const [dietaryChange, setDietaryChange] = useState("");
  const [medication, setMedication] = useState("");
  const [vitaminsAndSupplements, setVitaminsAndSupplements] = useState("");

  const [showHormonalContraceptives, setShowHormonalContraceptives] =
    useState(false);
  const [showFertilityTreatment, setShowFertilityTreatment] = useState(false);
  const [showDietaryChange, setShowDietaryChange] = useState(false);
  const [showMedication, setShowMedication] = useState(false);
  const [showVitaminsAndSupplements, setShowVitaminsAndSupplements] =
    useState(false);

  const handleSave = () => {
    const currentTreatmentsAndCare = {
      startingIntervention,
      endingIntervention,
      hormonalContraceptives,
      fertilityTreatment,
      dietaryChange,
      medication,
      vitaminsAndSupplements,
    };

    updateLogs({ treatmentsAndCare: currentTreatmentsAndCare });
    navigation.navigate("MAIN");
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
            <Text style={styles.headerText}>Treatments and Care</Text>
          </View>
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Starting Intervention</Text>
                <Switch
                  trackColor={{
                    false: "#767577",
                    true: "rgba(141, 128, 227, 0.6)",
                  }}
                  thumbColor={startingIntervention ? "#F7D7E3" : "#f4f3f4"}
                  onValueChange={setStartingIntervention}
                  value={startingIntervention}
                />
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Ending Intervention</Text>
                <Switch
                  trackColor={{
                    false: "#767577",
                    true: "rgba(141, 128, 227, 0.6)",
                  }}
                  thumbColor={endingIntervention ? "#F7D7E3" : "#f4f3f4"}
                  onValueChange={setEndingIntervention}
                  value={endingIntervention}
                />
              </View>

              <TouchableOpacity
                onPress={() =>
                  setShowHormonalContraceptives(!showHormonalContraceptives)
                }
                style={styles.button}
              >
                <Text style={styles.buttonText}>Hormonal Contraceptives</Text>
              </TouchableOpacity>
              {showHormonalContraceptives && (
                <TextInput
                  style={styles.input}
                  onChangeText={setHormonalContraceptives}
                  value={hormonalContraceptives}
                />
              )}

              <TouchableOpacity
                onPress={() =>
                  setShowFertilityTreatment(!showFertilityTreatment)
                }
                style={styles.button}
              >
                <Text style={styles.buttonText}>Fertility Treatment</Text>
              </TouchableOpacity>
              {showFertilityTreatment && (
                <TextInput
                  style={styles.input}
                  onChangeText={setFertilityTreatment}
                  value={fertilityTreatment}
                />
              )}

              <TouchableOpacity
                onPress={() => setShowDietaryChange(!showDietaryChange)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Dietary Change</Text>
              </TouchableOpacity>
              {showDietaryChange && (
                <TextInput
                  style={styles.input}
                  onChangeText={setDietaryChange}
                  value={dietaryChange}
                />
              )}

              <TouchableOpacity
                onPress={() => setShowMedication(!showMedication)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Medication</Text>
              </TouchableOpacity>
              {showMedication && (
                <TextInput
                  style={styles.input}
                  onChangeText={setMedication}
                  value={medication}
                />
              )}

              <TouchableOpacity
                onPress={() =>
                  setShowVitaminsAndSupplements(!showVitaminsAndSupplements)
                }
                style={styles.button}
              >
                <Text style={styles.buttonText}>Vitamins And Supplements</Text>
              </TouchableOpacity>
              {showVitaminsAndSupplements && (
                <TextInput
                  style={styles.input}
                  onChangeText={setVitaminsAndSupplements}
                  value={vitaminsAndSupplements}
                />
              )}
            </View>
          </ScrollView>

          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
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
  headerText: {
    fontSize: 30,
    fontFamily: "DMSerifDisplay",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingTop: 20,
  },
  button: {
    minHeight: 45,
    borderRadius: 10,
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
    padding: 7,
  },
  buttonText: {
    fontSize: 19,
    textAlign: "center",
    color: "#000000",
    fontFamily: "DMSerifDisplay",
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "70%",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    paddingLeft: 10,
  },
  saveButton: {
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
    marginBottom: 7,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  switchText: {
    fontFamily: "Almarai_Light",
    fontSize: 18,
  },
});

export default TreatmentsAndCareSymptomPage;
