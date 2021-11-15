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
    <View style={styles.container}>
      <View style={styles.mediumvioletred} />
      <View style={styles.darkturquoise} />
      <View style={styles.black} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row-reverse",
    // justifyContent: "center",
    // justifyContent: "space-evenly",
    // justifyContent: "around",
    justifyContent: "space-between",
    // alignItems: "stretch",
    alignItems: "center",
    // alignItems: "baseline",
    // alignItems: "flex-end"
    // alignItems: "flex-start"

  },
  mediumvioletred: {
    width: 100,
    height: 100,
    backgroundColor: "mediumvioletred",
  },
  darkturquoise: {
    width: 100,
    height: 200,
    backgroundColor: "darkturquoise",
  },
  black: {
    width: 100,
    height: 300,
    backgroundColor: "black",
    alignSelf: "flex-end"
  },
});
