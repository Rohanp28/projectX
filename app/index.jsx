import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styleSheet.container}>
      {/* <View style={styleSheet.topHeaderWrapper}>
        <View>X</View>
        <View>Later</View>
      </View> */}

      <View style={styleSheet.greetingSection}>
        <Text>Create an account</Text>
      </View>
      <View style={styleSheet.inputWrapper}>
        <TextInput
          placeholder="Enter your email"
          style={styleSheet.inputContainer}
        />
        <TextInput
          placeholder="Create password"
          style={styleSheet.inputContainer}
          secureTextEntry
        />
      </View>

      <View style={styleSheet.createAccountContainer}>
        <TouchableOpacity
          style={styleSheet.createAccountContainer.createAccountBtn}
        >
          <Text style={{ fontWeight: "600", fontSize: 20 }}>
            Create account
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ backgroundColor: "gray", height: 1, margin: 16 }}></View>
      </View>

      <View style={styleSheet.signInContainer}>
        <TouchableOpacity style={styleSheet.signInContainer.signInContainerBtn}>
          <View style={styleSheet.signInBtn}>
            <Image
              source={require("../assets/svg/google.png")}
              style={styleSheet.socialIcons}
            />
            <Text>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styleSheet.signInContainer.signInContainerBtn}>
          <View style={styleSheet.signInBtn}>
            <Image
              source={require("../assets/svg/fb.png")}
              style={styleSheet.socialIcons}
            />
            <Text>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styleSheet.signInContainer.signInContainerBtn}>
          <View style={styleSheet.signInBtn}>
            <Image
              source={require("../assets/svg/apple.png")}
              style={styleSheet.socialIcons}
            />
            <Text>Continue with Apple</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    height: "100%",
    padding: 15,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    color: "white",
    justifyContent: "space-evenly",
  },
  topHeaderWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  greetingSection: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  inputWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    padding: 10,
    backgroundColor: "#ffff",
    width: "100%",
    borderRadius: 4,
    color: "black",
    marginTop: 5,
  },
  createAccountContainer: {
    createAccountBtn: {
      elevation: 10,
      padding: 15,
      width: "100%",
      borderRadius: 10,
      backgroundColor: "#F5F5F5",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      color: "black",
    },
  },
  signInContainer: {
    display: "flex",
    gap: 8,

    signInContainerBtn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: 5,
      flexDirection: "row",
      backgroundColor: "white",
      padding: 10,
      borderRadius: 20,
      //   elevation: 10,
    },
  },
  signInBtn: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    minWidth: 160,
    alignItems: "center",
  },
  socialIcons: {
    width: 24,
    height: 24,
  },
});
