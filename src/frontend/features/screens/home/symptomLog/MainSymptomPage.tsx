import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from "react-native";
import SignOutButton from "../../../../components/SignOutButton";
import { Ionicons } from "@expo/vector-icons";
import SafeViewAndroid from "../../../../components/SafeViewAndroid";
import { LinearGradient } from "expo-linear-gradient";
import { SymptomLogContext } from "./SymptomLogContext";

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
    console.log("Function not implemented.");
  };

  const handleBreastSymptoms = () => {
    console.log("Function not implemented.");
  };

  const handleBladderSymptoms = () => {
    console.log("Function not implemented.");
  };

  const handleBowelSymptoms = () => {
    console.log("Function not implemented.");
  };

  const handlePelvicSymptoms = () => {
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
              <Text style={styles.buttonText}> Treatments </Text>
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
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  button: {
    height: 45,
    borderRadius: 58,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 100,
    elevation: 4,
    marginTop: 20,
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
    top: "5%",
    left: "58%",
    height: 35,
    borderRadius: 58,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 70,
    elevation: 4,
  },

  breastButton: {
    top: "20%",
    left: "20%",
    height: 35,
    borderRadius: 58,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 80,
    elevation: 4,
  },

  bladderButton: {
    top: "37%",
    left: "20%",
    height: 35,
    borderRadius: 58,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 80,
    elevation: 4,
  },

  bowelButton: {
    top: "35%",
    left: "50%",
    height: 50,
    borderRadius: 58,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 100,
    elevation: 4,
  },

  pelvicButton: {
    top: "50%",
    left: "37%",
    height: 35,
    borderRadius: 58,
    backgroundColor: "#F7D7E3",
    justifyContent: "center",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: 80,
    elevation: 4,
  },
});

export default MainSymptomPage;
