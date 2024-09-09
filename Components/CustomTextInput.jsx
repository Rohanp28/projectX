import React from "react";
import { TextInput } from "react-native";
import { useGlobalStyles } from "../app/GlobalStyles/GlobalStyles";
import { StyleSheet } from "react-native";

export const CustomTextInput = ({
  placeholder,
  secureTextEntry,
  placeholderTextColor,
}) => {
  const [globalStyles, loaded] = useGlobalStyles();
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={placeholderTextColor}
      style={{ ...globalStyles.text, ...styleSheet.inputContainer }}
    />
  );
};

const styleSheet = StyleSheet.create({
  inputContainer: {
    padding: 15,
    backgroundColor: "#222211E6",
    width: "100%",
    borderRadius: 10,
    marginTop: 5,
    fontSize: 14,
    color: "white",
  },
});
