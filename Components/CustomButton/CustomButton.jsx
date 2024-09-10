import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useGlobalStyles } from "../GlobalStyles/GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

export const CustomButton = ({ buttonText, secondary, onPress }) => {
  const [globalStyles, loaded] = useGlobalStyles();
  return (
    <TouchableOpacity
      style={secondary ? styleSheet.secondaryButton : styleSheet.button}
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyles.textBold,
          fontSize: 18,
          color: secondary ? "white" : "black",
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styleSheet = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFFF33",
    color: "black",
  },
  secondaryButton: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    elevation: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#69696980",
    color: "white",
  },
});
