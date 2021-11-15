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
      <View style={styles.greenyellow} />
      <View style={styles.gray} />
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
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center", //Only works when there is wrapping
    flexWrap: "wrap",
  },
  greenyellow: {
    width: 100,
    height: 100,
    backgroundColor: "greenyellow",
  },
  gray: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
  },
  mediumvioletred: {
    width: 100,
    height: 100,
    backgroundColor: "mediumvioletred",
  },
  darkturquoise: {
    width: 100,
    height: 100,
    backgroundColor: "darkturquoise",
  },
  black: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
});
