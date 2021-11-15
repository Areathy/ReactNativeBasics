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
    justifyContent: "space-between",
    alignItems: "center",
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
    width: 900,
    height: 100,
    backgroundColor: "black",
    flexShrink: 1, //Same as flex: 1-. if this items overflowing affects others, it get's shrunken so other items can fit on the screen
  },
});
