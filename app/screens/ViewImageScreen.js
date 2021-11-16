import React from "react";
import { Text } from "react-native";
import { Image, View, StyleSheet } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        source={require("../assets/profile.jpeg")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    width: 100,
    height: 100,
    backgroundColor: colors.sec,
    position: "absolute",
    top: 40,
    left: 30,
  },

  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  deleteIcon: {
    width: 100,
    height: 100,
    backgroundColor: colors.pri,
    position: "absolute",
    top: 40,
    right: 30,
  },

  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
