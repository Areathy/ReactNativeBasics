import React from "react";
import { Text } from "react-native";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/profile.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <Text style={styles.logoText}> Your Comfort Place </Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "darkturquoise",
  },

  logo: {
    width: 80,
    height: 80,
  },

  logoText: {
    color: "red",
  },

  logoContainer: {
    position: "absolute",
    top: 90,
    alignItems: "center",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "mediumvioletred",
  },
});

export default WelcomeScreen;
