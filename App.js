import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
import React from "react";
import { StyleSheet } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return <ViewImageScreen />;
}

const styles = StyleSheet.create({});
