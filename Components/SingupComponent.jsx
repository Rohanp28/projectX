import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useGlobalStyles } from "./GlobalStyles/GlobalStyles";
import { CustomTextInput } from "./CustomTextInput";
import { CustomButton } from "./CustomButton/CustomButton";

export default function SignUp({ setRenderSection }) {
  const [globalStyles, loaded] = useGlobalStyles();
  return (
    <View style={{ display: "flex", gap: 20 }}>
      <View
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: 600,
              ...globalStyles.text,
              fontSize: 24,
            }}
          >
            Create an account !
          </Text>
        </View>

        <View style={styleSheet.inputWrapper}>
          <CustomTextInput
            placeholder={"Enter Email"}
            secureTextEntry={false}
            placeholderTextColor="white"
          />
          <CustomTextInput
            placeholder={"Create Your Password"}
            secureTextEntry={true}
            placeholderTextColor="white"
          />
          <CustomTextInput
            placeholder={"Confirm Your Password"}
            secureTextEntry={true}
            placeholderTextColor="white"
          />
        </View>

        <View style={styleSheet.createAccountContainer}>
          <CustomButton buttonText={"Start Scrolling"} />
        </View>
      </View>

      <Pressable onPress={() => setRenderSection(2)}>
        <Text
          style={{
            ...globalStyles.text,
            color: "white",
            textAlign: "center",
          }}
        >
          Already have an account ?
        </Text>
      </Pressable>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  inputWrapper: {
    width: "100%",
    display: "flex",
    gap: 10,
    flexDirection: "column",
    paddingTop: 15,
  },
  inputContainer: {
    padding: 15,
    backgroundColor: "#222211E6",
    width: "100%",
    borderRadius: 10,
    marginTop: 5,
    fontSize: 14,
  },
  createAccountContainer: {
    width: "100%",
    paddingTop: 10,
  },
});
