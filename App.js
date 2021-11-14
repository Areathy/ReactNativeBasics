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
  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "tomato", width: "100%",
        height: landscape ? "100%" : "30%" }}
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
