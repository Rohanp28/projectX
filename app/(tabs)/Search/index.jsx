import { Colors } from "@/constants/Colors";
import React, { useRef, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";
import { VideoTilesMed } from "../../../Components/VideoTiles/VideoTilesMed";
import { router } from "expo-router";
import { useGlobalStyles } from "../../../Components/GlobalStyles/GlobalStyles";

const Search = () => {
  const scrollViewRef = useRef(null);
  const [globalStyles, loaded] = useGlobalStyles();

  const [scrollPosY, setScrollPosY] = useState(0);
  const [height, setHeight] = useState(0);

  const handleScroll = (e) => {
    setScrollPosY(e.nativeEvent.contentOffset.y);
  };
  return (
    <View style={styleSheet.container}>
      <Pressable
        style={styleSheet.searchBarContainer}
        onPress={() => {
          router.push("/Search/SearchDetailsPage");
        }}
      >
        <FontAwesome size={18} name="search" color={"white"} />
        <Text style={{ ...globalStyles.text, color: "white" }}>Search</Text>
      </Pressable>

      <ScrollView
        onScroll={handleScroll}
        ref={scrollViewRef}
        style={{ marginTop: 12 }}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setHeight(height);
          console.log("ScrollView height =>", height);
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: 300,
          }}
        >
          <View style={{ width: "50%", height: "100%", padding: 2 }}>
            <VideoTilesMed
              autoPlay={true}
              scrollPos={scrollPosY}
              scrollViewRef={scrollViewRef}
              index={0}
              scrollHeight={height}
              source={require("../../../assets/videos/testVideo2.mp4")}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              height: "100%",
              padding: 2,
            }}
          >
            <View
              style={{
                width: "100%",
                height: "50%",
              }}
            >
              <Image
                source={require("../../../assets/Image/test2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                width: "100%",
                height: "50%",
              }}
            >
              <Image
                source={require("../../../assets/Image/test3.jpg")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
            height: 300,
          }}
        >
          <View style={{ width: "50%", height: "100%", padding: 2 }}>
            <VideoTilesMed
              autoPlay={true}
              scrollPos={scrollPosY}
              scrollViewRef={scrollViewRef}
              index={1}
              scrollHeight={height}
              source={require("../../../assets/videos/testVideo1.mp4")}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              height: "100%",
              backgroundColor: "black",
              padding: 2,
            }}
          >
            <View
              style={{
                width: "100%",
                height: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../../../assets/Image/test2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                width: "100%",
                height: "50%",
              }}
            >
              <Image
                source={require("../../../assets/Image/test3.jpg")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
            height: 300,
          }}
        >
          <View style={{ width: "50%", height: "100%", padding: 2 }}>
            <VideoTilesMed
              autoPlay={true}
              scrollPos={scrollPosY}
              scrollViewRef={scrollViewRef}
              index={2}
              scrollHeight={height}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              height: "100%",
              backgroundColor: "black",
              padding: 2,
            }}
          >
            <View
              style={{
                width: "100%",
                height: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../../../assets/Image/test2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                width: "100%",
                height: "50%",
              }}
            >
              <Image
                source={require("../../../assets/Image/test3.jpg")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

const styleSheet = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: Colors.backgroundColor,
    padding: 10,
  },
  searchBarContainer: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#303030",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  searchTilesContainer: {
    width: "50%",
    height: 300,
    padding: 2,
  },
});
