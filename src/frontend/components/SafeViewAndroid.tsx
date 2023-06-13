import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight*0.6 : 0,
  },
  iOSSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
    paddingBottom: 0,
  }
});
