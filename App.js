import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="green"
        title="click me"
        onPress={() =>
          Alert.alert("Title", "message", [
            { text: "go", onPress: () => console.log("GO!!!") },
            { text: "stop", onPress: () => console.log("STOP!!!") },
          ])
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
