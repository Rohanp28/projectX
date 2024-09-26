import { Video } from "expo-av";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View } from "react-native";

export const VideoTilesMed = ({
  scrollPos, // Current scroll position passed as a prop
  scrollViewRef, // Reference to the ScrollView
  index, // Index of the current component
  scrollHeight, // Height of the visible scroll area
}) => {
  const [isViewVisible, setIsViewVisible] = useState(false); // Default is not visible
  const viewRef = useRef(null); // Ref for the view

  // useEffect to check visibility whenever scroll position changes
  useEffect(() => {
    if (viewRef.current && scrollViewRef.current) {
      viewRef.current.measureLayout(
        scrollViewRef.current, // Measure relative to ScrollView
        (x, y, width, height) => {
          const viewTop = y;
          const viewBottom = (y + height) / 2;

          // Check if the view is visible within the current scroll window
          const isVisible =
            viewBottom > scrollPos && viewTop < scrollPos + scrollHeight;
          setIsViewVisible(isVisible);
        }
      );
    }
  }, [scrollPos, scrollHeight]); // Dependencies: scroll position and height

  return (
    <View style={styleSheet.searchTilesContainer}>
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          width: "100%",
          height: "100%",
        }}
        ref={viewRef} // Reference for the view
      >
        <Video
          source={require("../../assets/videos/test1.mp4")}
          style={{ width: "100%", height: "100%" }}
          isLooping
          resizeMode="cover"
          shouldPlay={isViewVisible} // Play only if visible
          isMuted
        />
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  searchTilesContainer: {
    width: "100%",
    height: "100%",
  },
});
