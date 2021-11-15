import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
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
  const { landscape } = useDeviceOrientation();

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ backgroundColor: "mediumvioletred", flex: 1 }} />
      <View style={{ backgroundColor: "black", flex: 2 }} />
      <View style={{ backgroundColor: "darkturquoise", flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "teal" : "violet",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
