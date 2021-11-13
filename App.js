import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "tomato", width: "50%", height: 70 }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "teal" : "violet",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
