import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { useGlobalStyles } from "../../Components/GlobalStyles/GlobalStyles";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Stories } from "../StoriesSection/StoriesSection";
import { Header } from "../Header/Header";
import { Colors } from "@/constants/Colors";

export const Feed = () => {
  const [globalStyles, loaded] = useGlobalStyles();
  const [currentScroll, setCurrentScroll] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const posts = [
    {
      accountProfileLogo: "",
      accountUsername: "timesOfIndia",
      post: "https://cdn.pixabay.com/photo/2020/05/15/14/17/water-5173774_960_720.jpg",
      noOfLikes: 28,
      noOfComments: 25,
      caption:
        "my first post saasasasasas asasasasasa asasasas asasasa asasasas asasas a.......!!",
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
    },
    {
      accountProfileLogo: "",
      accountUsername: "timesOfIndia",
      post: "https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_1280.jpg",
      noOfLikes: 28,
      noOfComments: 25,
      caption:
        "my first post saasasasasas asasasasasa asasasas asasasa asasasas asasas a.......!!",
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
    },
    {
      accountProfileLogo: "",
      accountUsername: "timesOfIndia",
      post: "https://cdn.pixabay.com/photo/2023/06/16/15/14/sunset-8068208_1280.jpg",
      noOfLikes: 28,
      noOfComments: 25,
      caption:
        "my first post saasasasasas asasasasasa asasasas asasasa asasasas asasas a.......!!",
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
    },
    {
      accountProfileLogo: "",
      accountUsername: "timesOfIndia",
      post: "https://cdn.pixabay.com/photo/2024/02/22/15/18/clouds-8590310_1280.jpg",
      noOfLikes: 28,
      noOfComments: 25,
      caption:
        "my first post saasasasasas asasasasasa asasasas asasasa asasasas asasas a.......!!",
      id: "58694a0f-3da1-471f-bd96-145571e29d75",
    },
  ];

  const Item = ({ item, index }) => {
    return (
      <View style={{ position: "relative" }}>
        {index == 0 && (
          <>
            <Stories />
          </>
        )}
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/Avatar/avtar2.webp")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                }}
              />
              <Text
                style={{
                  ...globalStyles.textBold,
                  fontSize: 16,
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              >
                {item.accountProfileLogo} {item.accountUsername}
              </Text>
            </View>
            <SimpleLineIcons name="options-vertical" size={18} color="white" />
          </View>
          <View style={styles.postImage}>
            <Image
              style={styles.postPhoto}
              source={{
                uri: item.post,
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.postFooter}>
            <FontAwesome size={23} name="heart-o" color="white" />
            <Text
              style={{
                ...globalStyles.textBold,
                fontSize: 14,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: 10,
                color: "white",
              }}
            >
              {item.noOfLikes}
            </Text>
            <FontAwesome size={23} name="comment-o" color="white" />
            <Text
              style={{
                ...globalStyles.textBold,
                fontSize: 14,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                paddingRight: 10,
                color: "white",
              }}
            >
              {item.noOfComments}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text
              style={{ ...globalStyles.text, fontSize: 16, color: "white" }}
            >
              <Text
                style={{
                  ...globalStyles.textBold,
                  fontSize: 18,
                  color: "white",
                }}
              >
                {item.accountUsername}
              </Text>{" "}
              {item.caption}
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              display: "flex",
              gap: 5,
            }}
          >
            <Text
              style={{ ...globalStyles.textBold, fontSize: 14, color: "white" }}
            >
              View all comments
            </Text>
            <Text
              style={{ ...globalStyles.textBold, fontSize: 12, color: "grey" }}
            >
              28 hours ago
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        // keyExtractor={(item) => item.id}
        keyExtractor={(item) => item.id}
        // onScroll={(e) => {
        //   if (e.nativeEvent.contentOffset.y > currentScroll) {
        //     setShowHeader(false);
        //   } else {
        //     setShowHeader(true);
        //   }
        //   setCurrentScroll(e.nativeEvent.contentOffset.y);
        // }}
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  postContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10,
    gap: 8,
    width: "100%",
    backgroundColor: Colors.backgroundColor,
  },
  postHeader: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  postImage: {
    marginTop: 5,
    height: 600,
  },
  postPhoto: {
    height: "100%",
    width: "100%", // Adjusts the width to fit the screen
    aspectRatio: 1, // Keeps the aspect ratio consistent
  },
  postFooter: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 5,
  },
});
