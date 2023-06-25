import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import SignOutButton from "../../../../components/SignOutButton";
import { Ionicons } from "@expo/vector-icons";
import SafeViewAndroid from "../../../../components/SafeViewAndroid";
import { LinearGradient } from "expo-linear-gradient";
import { SymptomLogContext } from "./SymptomLogContext";

const buttonWidth = Dimensions.get("window").width / 4 - 5;

const MainSymptomPage = ({ navigation }) => {
  const { logs } = useContext(SymptomLogContext);

  useEffect(() => {
    console.log("MAIN PAGE SYMPTOM LOG STATUS:", logs);
  }, []);

  const handleMentalHealth = () => {
    navigation.navigate("MENTAL_HEALTH");
  };

  const handleTreatmentsAndCare = () => {
    navigation.navigate("TREATMENTS_CARE");
  };

  const handleLifeStyleTracking = () => {
    navigation.navigate("LIFESTYLE_TRACKING");
  };

  const handlePainTracking = () => {
    // navigation.navigate("PAIN_TRACKING")
    console.log("Pain Tracking to be implemented!");
  };

  const handleHeadSymptoms = () => {
    navigation.navigate("HEAD_SYMPTOM");
  };

  const handleBreastSymptoms = () => {
    navigation.navigate("BREAST_SYMPTOM");
  };

  const handleBladderSymptoms = () => {
    navigation.navigate("BLADDER_SYMPTOM");
  };

  const handleBowelSymptoms = () => {
    navigation.navigate("BOWEL_SYMPTOM");
  };

  const handlePelvicSymptoms = () => {
    navigation.navigate("PELVIC_SYMPTOM");
  };

  const handleSave = () => {
    console.log("Function not implemented.");
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
            <Text style={styles.headerText}>Today's Log</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleMentalHealth}
            >
              <Text style={styles.buttonText}> Mental Health </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleTreatmentsAndCare}
            >
              <View>
                <Text style={styles.buttonText}>Treatments</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLifeStyleTracking}
            >
              <Text style={styles.buttonText}> Lifestyle </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handlePainTracking}
            >
              <Text style={styles.buttonText}> Pain </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Animated.Image
                source={require("../../../../assets/images/female_body_no_bg.png")}
                style={styles.image}
              />
              <TouchableOpacity
                style={[styles.button, styles.headButton]}
                onPress={handleHeadSymptoms}
              >
                <Text style={styles.buttonText}> Head </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.breastButton]}
                onPress={handleBreastSymptoms}
              >
                <Text style={styles.buttonText}> Breasts </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.bladderButton]}
                onPress={handleBladderSymptoms}
              >
                <Text style={styles.buttonText}> Bladder </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.bowelButton]}
                onPress={handleBowelSymptoms}
              >
                <Text style={styles.buttonText}> Bowel/Intestinal </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.pelvicButton]}
                onPress={handlePelvicSymptoms}
              >
                <Text style={styles.buttonText}> Pelvic </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
            <Text style={styles.buttonText}>Submit Log</Text>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 3,
    paddingRight: 3,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  button: {
    minHeight: 45,
    borderRadius: 20,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: buttonWidth,
    elevation: 4,
    padding: 3,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000000",
    fontFamily: "DMSerifDisplay",
  },
  imageContainer: {
    width: "80%",
    height: "80%",
    position: "relative",
  },

  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  headButton: {
    top: "-3%",
    left: "40%",
    minHeight: 35,
    borderRadius: 58,
    backgroundColor: "rgba(189, 166, 218, 1)",
    width: 70,
    position: "absolute",
  },

  breastButton: {
    top: "25%",
    left: "38%",
    minHeight: 35,
    backgroundColor: "rgba(189, 166, 218, 1)",
    position: "absolute",
    width: 80,
  },

  bladderButton: {
    top: "37%",
    left: "20%",
    minHeight: 35,
    backgroundColor: "rgba(189, 166, 218, 1)",
    position: "absolute",
    width: 80,
  },

  bowelButton: {
    top: "40%",
    left: "53%",
    minHeight: 35,
    backgroundColor: "rgba(189, 166, 218, 1)",
    position: "absolute",
    width: 100,
  },

  pelvicButton: {
    top: "50%",
    left: "20%",
    minHeight: 35,
    backgroundColor: "rgba(189, 166, 218, 1)",
    width: 80,
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
});

export default MainSymptomPage;
