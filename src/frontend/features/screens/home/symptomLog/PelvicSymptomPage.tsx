import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
} from "react-native";
import SafeViewAndroid from "../../../../components/SafeViewAndroid";
import { LinearGradient } from "expo-linear-gradient";
import Collapsible from "react-native-collapsible";
import { SymptomLogContext } from "./SymptomLogContext";

const labelsMap = {
  painWithSex: "Pain with Sex?",
  lowLibido: "Low Libido?",
  smell: "Smell?",
  thick: "Thick?",
  bacterialVaginosis: "Bacterial Vaginosis?",
  yeastInfection: "Yeast Infection?",
  urinaryTractInfection: "Urinary Tract Infection?",
  spotting: "Spotting?",
  padsPerDay: "Pads Per Day",
};

const dischargeColors = ["clear", "gray", "white", "yellow", "green"];
const bloodColors = ["light pink", "light orange", "red", "dark red", "brown"];

const SwitchContainer = ({ value, setValue, label }) => (
  <TouchableOpacity
    style={styles.switchContainer}
    onPress={() => setValue(!value)}
  >
    <Text style={styles.switchText}>{label}</Text>
    <Switch onValueChange={setValue} value={value} />
  </TouchableOpacity>
);

const ColorPicker = ({ colors, selectedColor, onColorSelect }) => (
  <View style={styles.colorContainer}>
    {colors.map((color) => (
      <TouchableOpacity
        key={color}
        style={[
          styles.colorButton,
          {
            backgroundColor: color,
            borderColor: selectedColor === color ? "black" : "transparent",
            borderWidth: selectedColor === color ? 2 : 0,
          },
        ]}
        onPress={() => onColorSelect(color)}
      />
    ))}
  </View>
);

const PelvicSymptomPage = ({ navigation }) => {
  const { updateLogs, logs } = useContext(SymptomLogContext);
  const [isSexCollapsed, setIsSexCollapsed] = useState(true);
  const [isDischargeCollapsed, setIsDischargeCollapsed] = useState(true);
  const [isInfectionsCollapsed, setIsInfectionsCollapsed] = useState(true);
  const [isPeriodCollapsed, setIsPeriodCollapsed] = useState(true);
  const [state, setState] = useState({
    sex: { painWithSex: false, lowLibido: false },
    discharge: { smell: false, thick: false, color: "" },
    infections: {
      bacterialVaginosis: false,
      yeastInfection: false,
      urinaryTractInfection: false,
    },
    period: { spotting: false, padsPerDay: "", color: "" },
  });

  const handleStateChange = (category, changes) => {
    setState((prevState) => ({
      ...prevState,
      [category]: { ...prevState[category], ...changes },
    }));
  };

  const handleNextButtonClick = () => {
    updateLogs({ pelvicSymptoms: state });
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
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Pelvic Symptoms</Text>
            </View>
            <View style={styles.content}>
              {Object.entries(state).map(([category, symptoms]) => (
                <View key={category} style={styles.categoryContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      if (category === "sex")
                        setIsSexCollapsed(!isSexCollapsed);
                      if (category === "discharge")
                        setIsDischargeCollapsed(!isDischargeCollapsed);
                      if (category === "infections")
                        setIsInfectionsCollapsed(!isInfectionsCollapsed);
                      if (category === "period")
                        setIsPeriodCollapsed(!isPeriodCollapsed);
                    }}
                  >
                    <Text style={styles.categoryTitle}>{category}</Text>
                  </TouchableOpacity>
                  <Collapsible
                    collapsed={
                      category === "sex"
                        ? isSexCollapsed
                        : category === "discharge"
                        ? isDischargeCollapsed
                        : category === "infections"
                        ? isInfectionsCollapsed
                        : isPeriodCollapsed
                    }
                  >
                    {Object.entries(symptoms).map(([symptom, value]) => {
                      if (symptom === "color") {
                        const colors =
                          category === "discharge"
                            ? dischargeColors
                            : bloodColors;
                        return (
                          <ColorPicker
                            key={symptom}
                            colors={colors}
                            selectedColor={value}
                            onColorSelect={(color) =>
                              handleStateChange(category, { color })
                            }
                          />
                        );
                      }

                      if (symptom === "padsPerDay") {
                        return (
                          <View key={symptom} style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>{symptom}</Text>
                            <TextInput
                              style={styles.input}
                              onChangeText={(padsPerDay) =>
                                handleStateChange(category, { padsPerDay })
                              }
                              keyboardType="numeric"
                            />
                          </View>
                        );
                      }

                      return (
                        <SwitchContainer
                          key={symptom}
                          value={value}
                          setValue={(value) =>
                            handleStateChange(category, { [symptom]: value })
                          }
                          label={labelsMap[symptom]}
                        />
                      );
                    })}
                  </Collapsible>
                </View>
              ))}
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
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  headerText: { fontSize: 30, fontFamily: "DMSerifDisplay" },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 30,
  },
  footer: { justifyContent: "center", alignItems: "center" },
  nextButton: {
    height: 45,
    borderRadius: 58,
    backgroundColor: "rgba(141, 128, 227, 0.8)",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
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
    fontFamily: "Almarai_Bold",
  },
  switchText: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Almarai_Bold",
    paddingLeft: 9,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F7D7E3",
    borderRadius: 14,
    padding: 10,
    marginBottom: 20,
    width: "75%",
    height: 50,
  },
  categoryContainer: {
    width: "100%",
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 22,
    fontFamily: "Almarai_Bold",
    marginBottom: 10,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "75%",
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: "75%",
  },
  inputLabel: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Almarai_Bold",
    paddingLeft: 9,
  },
  input: {
    height: 30,
    width: "50%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default PelvicSymptomPage;
