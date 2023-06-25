import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import SafeViewAndroid from "../../../../components/SafeViewAndroid";
import { LinearGradient } from "expo-linear-gradient";
import { SymptomLogContext } from "./SymptomLogContext";

const BowelSymptomPage = ({ navigation }) => {
  const { updateLogs, logs } = useContext(SymptomLogContext);
  const [bowelMovementPain, setBowelMovementPain] = useState(false);
  const [bloodInStool, setBloodInStool] = useState(false);
  const [stoolType, setStoolType] = useState(1);
  const [showStoolImage, setShowStoolImage] = useState(false);

  const handleNextButtonClick = () => {
    const bowelSymptoms = {
      bowelMovementPain: bowelMovementPain,
      bloodInStool: bloodInStool,
      stoolType: stoolType,
    };

    updateLogs({ bowelSymptoms });
    navigation.goBack();
  };

  const handleStoolTypeClick = (number) => {
    setStoolType(number);
  };

  const stoolTypeButtons = Array.from({ length: 7 }, (_, i) => (
    <TouchableOpacity
      key={i}
      style={[
        styles.stoolTypeButton,
        stoolType === i + 1 && { backgroundColor: "rgba(141, 128, 227, 0.8)" },
      ]}
      onPress={() => handleStoolTypeClick(i + 1)}
    >
      <Text style={styles.buttonText}>{i + 1}</Text>
    </TouchableOpacity>
  ));

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
            <Text style={styles.headerText}>Bowel Symptoms</Text>
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={styles.switchContainer}
              onPress={() => setShowStoolImage(!showStoolImage)}
            >
              <Text style={styles.switchText}>Stool Type</Text>
            </TouchableOpacity>
            {showStoolImage && (
              <View style={styles.stoolContainer}>
                <Image
                  style={styles.stoolImage}
                  source={require("../../../../assets/images/stool_types.jpg")}
                />
                <View style={styles.stoolTypeContainer}>
                  {stoolTypeButtons}
                </View>
              </View>
            )}
            <TouchableOpacity style={styles.switchContainer}>
              <Text style={styles.switchText}>Bowel Movement Pain</Text>
              <Switch
                onValueChange={setBowelMovementPain}
                value={bowelMovementPain}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchContainer}>
              <Text style={styles.switchText}>Blood in Stool</Text>
              <Switch onValueChange={setBloodInStool} value={bloodInStool} />
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
  switchText: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Almarai_Bold",
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
    fontFamily: "Almarai_Bold",
  },
  stoolContainer: {
    width: "100%",
    marginBottom: 40,
  },
  stoolImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F7D7E3",
    borderRadius: 14,
    padding: 10,
    marginBottom: 40,
    width: "75%",
    height: 50,
  },
  stoolTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  stoolTypeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BowelSymptomPage;
