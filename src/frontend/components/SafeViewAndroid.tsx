import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "rgba(141, 128, 227, 0.64)",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});