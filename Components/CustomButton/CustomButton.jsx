import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useGlobalStyles } from "../../app/GlobalStyles/GlobalStyles";

export const CustomButton = ({ buttonText }) => {
  const [globalStyles, loaded] = useGlobalStyles();
  return (
    <Pressable style={styleSheet.button}>
      <Text
        style={{
          ...globalStyles.textBold,
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        {buttonText}
      </Text>
    </Pressable>
  );
};

const styleSheet = StyleSheet.create({
  button: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    elevation: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFFF33",
    color: "black",
  },
});
