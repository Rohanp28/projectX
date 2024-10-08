import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CustomTextInput } from "./CustomTextInput";
import { useGlobalStyles } from "../app/GlobalStyles/GlobalStyles";
import { CustomButton } from "./CustomButton/CustomButton";

export const LoginForm = () => {
  const [globalStyles, loaded] = useGlobalStyles();

  return (
    <View style={stylesheet.loginContainer}>
      <View>
        <Text
          style={{
            ...globalStyles.text,
            color: "white",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Log back in
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "between",
          alignItems: "center",
        }}
      >
        <CustomTextInput
          placeholder={"Enter Your Email"}
          placeholderTextColor={"white"}
          secureTextEntry={false}
        />
        <CustomTextInput
          placeholder={"Enter Your Password"}
          placeholderTextColor={"white"}
          secureTextEntry={true}
        />
      </View>
      <View>
        <CustomButton buttonText={"Continue Scrolling"} />
      </View>
    </View>
  );
};

const stylesheet = StyleSheet.create({
  loginContainer: {
    display: "flex",
    gap: 20,
  },
});
