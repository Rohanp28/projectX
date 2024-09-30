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
      image: require("../../assets/Avatar/avatar1.png"),
      id: "1",
    },
    {
      userName: "kush",
      image: require("../../assets/Avatar/avtar2.png"),
      id: "2",
    },
    {
      userName: "kush",
      image: require("../../assets/Avatar/avtar2.webp"),
      id: "3",
    },
    {
      userName: "kush",
      image: require("../../assets/Avatar/avtar3.jpg"),
      id: "4",
    },
    {
      userName: "kush",
      image: require("../../assets/Avatar/avtar4.jpeg"),
      id: "5",
    },
    {
      userName: "kush",
      image: require("../../assets/Avatar/avtar5.jpg"),
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
              source={item.image}
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
