import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useGlobalStyles } from "../app/GlobalStyles/GlobalStyles";

export default function SignUp() {
  const [globalStyles, loaded] = useGlobalStyles();
  return (
    <View style={{ display: "flex", gap: 20 }}>
      <View
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "between",
          alignItems: "center",
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
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="white"
            style={{
              ...globalStyles.text,
              ...styleSheet.inputContainer,
              color: "white",
            }}
          />
          <TextInput
            placeholder="Create password"
            placeholderTextColor="white"
            style={{
              ...globalStyles.text,
              ...styleSheet.inputContainer,
              color: "white",
            }}
            secureTextEntry
          />
        </View>

        <View style={styleSheet.createAccountContainer}>
          <TouchableOpacity
            style={styleSheet.createAccountContainer.createAccountBtn}
          >
            <Text
              style={{
                ...globalStyles.textBold,
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              Start scrolling
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text
          style={{
            ...globalStyles.text,
            color: "white",
            textAlign: "center",
          }}
        >
          Already have an account ?
        </Text>
      </View>
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
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingTop: 10,
    createAccountBtn: {
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
  },
});
