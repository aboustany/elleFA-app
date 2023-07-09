import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import SignOutButton from "../../../components/SignOutButton";
import { Ionicons } from "@expo/vector-icons";
import SafeViewAndroid from "@components/SafeViewAndroid";
import { LinearGradient } from "expo-linear-gradient";

const HomePage = ({ navigation }) => {
  const handleMenuPress = () => {
    navigation.navigate("SETTINGS");
  };

  const handlePdfPress = () => {
    navigation.navigate("PDF_PAGE");
  };

  const handleBellPress = () => {
    // TODO: Add logic to handle mute/unmute notifications
    alert("Notifications button pressed");
  };

  const handleLogPress = () => {
    navigation.navigate("DAILY_LOG");
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
          <View style={styles.headerLeftIcons}>
            <TouchableOpacity onPress={handleMenuPress}>
              <Ionicons name="menu-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/images/black-logo-without-text.png")}
            style={{
              height: "10%",
              width: "10%",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
          <View style={styles.headerRightIcons}>
            <TouchableOpacity
              onPress={handlePdfPress}
              style={styles.iconButton}
            >
              <Ionicons name="print-outline" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleBellPress}
              style={styles.iconButton}
            >
              <Ionicons name="notifications-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome Back!</Text>
          </View>

          <View style={styles.content}>
            <TouchableOpacity style={styles.button} onPress={handleLogPress}>
              <Text style={styles.buttonText}> Log Symptoms! </Text>
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
  headerText: {
    fontSize: 30,
    fontFamily: "DMSerifDisplay",
  },
  signOutButton: {
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  headerRightIcons: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    top: 22,
  },
  headerLeftIcons: {
    flexDirection: "row",
    position: "absolute",
    left: 10,
    top: 22,
  },
  iconButton: {
    marginLeft: 10,
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
    fontFamily: "Almarai",
  },
});

export default HomePage;
