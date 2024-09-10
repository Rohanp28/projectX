import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { useGlobalStyles } from "./GlobalStyles/GlobalStyles";

export function SocialSign() {
  const [globalStyles, loaded] = useGlobalStyles();
  return (
    <View style={styleSheet.signInContainer}>
      <TouchableOpacity style={styleSheet.signInContainer.signInContainerBtn}>
        <View style={styleSheet.signInBtn}>
          <Image
            source={require("../assets/svg/google.png")}
            style={styleSheet.socialIcons}
          />
          <Text
            style={{
              ...globalStyles.text,
              fontSize: 14,
              fontWeight: "300",
              color: "white",
            }}
          >
            Continue with Google
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.signInContainer.signInContainerBtn}>
        <View style={styleSheet.signInBtn}>
          <Image
            source={require("../assets/svg/fb.png")}
            style={styleSheet.socialIcons}
          />
          <Text
            style={{
              ...globalStyles.text,
              fontSize: 14,
              fontWeight: "400",
              color: "white",
            }}
          >
            Continue with Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styleSheet.signInContainer.signInContainerBtn}>
        <View style={styleSheet.signInBtn}>
          <Image
            source={require("../assets/svg/apple.png")}
            style={styleSheet.socialIcons}
          />
          <Text
            style={{
              ...globalStyles.text,
              fontSize: 14,
              fontWeight: "500",
              color: "white",
            }}
          >
            Continue with Apple
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  signInContainer: {
    display: "flex",
    gap: 8,
    paddingTop: 10,

    signInContainerBtn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: 5,
      flexDirection: "row",
      backgroundColor: "#69696980",
      padding: 10,
      borderRadius: 10,

      //   elevation: 10,
    },
  },
  signInBtn: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    color: "white",
    minWidth: 180,
  },
  socialIcons: {
    width: 24,
    height: 24,
  },
});
