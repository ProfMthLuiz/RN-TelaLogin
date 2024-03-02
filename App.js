import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import React from "react";

export default function App() {
  const imgBack = require("./src/images/background.jpg");
  const iconUser = require("./src/images/iconuser.png");
  const iconPassword = require("./src/images/iconpassword.png");
  const iconLogin = require("./src/images/iconlogin.png");

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={imgBack}
        resizeMode="cover"
      >
        <View style={styles.cardLogin}>
          <View style={styles.iconContainer}>
            <Image style={styles.iconLogin} source={iconLogin} />
          </View>

          <Text style={styles.title}>Login</Text>

          <View style={styles.areaInputs}>
            <Image style={styles.icon} source={iconUser} />
            <TextInput
              style={styles.textInput}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.areaInputs}>
            <Image style={styles.icon} source={iconPassword} />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

          <Button title="Login" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  imgBackground: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cardLogin: {
    width: "80%",
    padding: 20,
    backgroundColor: "#ffffff33",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderWidth: 1,
    borderColor: "#000",
  },

  title: {
    fontSize: 40,
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 40,
  },

  areaInputs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    position: "absolute",
    top: -50,
    left: "50%",
    marginLeft: -30,
    zIndex: 1,
  },

  iconLogin: {
    width: 100,
    height: 100,
  },

  icon: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },

  textInput: {
    width: "80%",
    letterSpacing: 1,
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    borderColor: "#000",
    margin: 10,
  },
});
