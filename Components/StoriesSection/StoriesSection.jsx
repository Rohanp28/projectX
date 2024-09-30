import { Colors } from "@/constants/Colors";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";

export const Stories = () => {
  const data = [
    {
      userName: "kush",
      image: "image",
      id: "1",
    },
    {
      userName: "kush",
      image: "image",
      id: "2",
    },
    {
      userName: "kush",
      image: "image",
      id: "3",
    },
    {
      userName: "kush",
      image: "image",
      id: "4",
    },
    {
      userName: "kush",
      image: "image",
      id: "5",
    },
    {
      userName: "kush",
      image: "image",
      id: "6",
    },
  ];
  return (
    <View style={styleSheet.container}>
      {/* current user profile */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styleSheet.currentUserContainer}>
            <Image
              source={require("../../assets/Image/test1.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: Colors.backgroundColor,
    height: 110,
  },
  currentUserContainer: {
    marginHorizontal: 10,
    padding: 2,
    width: 75,
    height: 75,
    borderColor: "#696969",
    borderWidth: 3,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
