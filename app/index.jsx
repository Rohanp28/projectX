import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { useGlobalStyles } from "../Components/GlobalStyles/GlobalStyles";
import SignUp from "../Components/SingupComponent";
import { LoginForm } from "../Components/LoginFormComponent";
import Welcome from "../Components/Welcome";

export default function App() {
  const [globalStyles, loaded] = useGlobalStyles();
  const [renderSection, setRenderSection] = useState(1);
  const [popOverVisible, setPopOverVisible] = useState(false);
  const sectionArr = [
    <SignUp setRenderSection={setRenderSection} />,
    <Welcome setRenderSection={setRenderSection} />,
    <LoginForm setRenderSection={setRenderSection} />,
  ];
  if (!loaded) {
    return <Text>loading ..</Text>;
  }
  return (
    <View style={styleSheet.container}>
      {/* <View style={styleSheet.container}>{sectionArr[renderSection]}</View> */}
      <Welcome setPopOverVisible={setPopOverVisible} />
      <View
        style={{
          ...styleSheet.popOver,
          transform: popOverVisible ? "scaleY(1)" : "scaleY(0)",
        }}
      >
        <View style={styleSheet.grabber}></View>
        <View style={styleSheet.section}>
          <SignUp />
        </View>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    gap: 20,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black",
    position: "relative",
  },
  popOver: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: "2%",
    backgroundColor: "#393939F7",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: "flex",
    width: "100%",
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  grabber: {
    backgroundColor: "gray",
    width: "80%",
    height: 8,
    borderRadius: 10,
    marginTop: 10,
  },
  section: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
});
