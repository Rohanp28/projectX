import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useGlobalStyles } from "./GlobalStyles/GlobalStyles";
import SignUp from "../Components/SingupComponent";
import RegionSeprator from "../Components/RegionSepratorComponent";
import { SocialSign } from "../Components/SocialSignInComponent";

export default function App() {
  const [globalStyles, loaded] = useGlobalStyles();
  if (!loaded) {
    return <Text>loading ..</Text>;
  }
  return (
    <View style={styleSheet.container}>
      {/* signup component */}
      <SignUp />
      {/* region seprator */}
      <RegionSeprator />
      {/* socials signin buttons */}
      <SocialSign />
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    height: "100%",
    padding: 15,
    display: "flex",
    gap: 20,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black",
    color: "white",
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
});
