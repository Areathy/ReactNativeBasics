import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return <WelcomeScreen />;
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
