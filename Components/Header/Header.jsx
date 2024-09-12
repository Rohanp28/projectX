import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useGlobalStyles } from "../../Components/GlobalStyles/GlobalStyles";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

export const Header = () => {
  const [globalStyles, loaded] = useGlobalStyles();
  return (
    <View style={styleSheet.container}>
      <View>
        <Text style={{ ...globalStyles.text, color: "white" }}>projectX</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <View>
          <FontAwesome6 name="message" size={25} color="white" />
        </View>
        <View>
          <AntDesign name="hearto" size={25} color="white" />
        </View>
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    display: "flex",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    height: 60,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#696969",
  },
});
