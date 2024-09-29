import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  PanResponder,
  StyleSheet,
  View,
} from "react-native";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const CustomBottomModal = ({ children, setPopOverVisible }) => {
  const top = useRef(new Animated.Value(SCREEN_HEIGHT)).current; // Initialize with SCREEN_HEIGHT to start off-screen

  useEffect(() => {
    Animated.timing(top, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [top]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy >= 5) {
          Animated.timing(top, {
            toValue: SCREEN_HEIGHT,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            setTimeout(() => {
              setPopOverVisible(false);
            }, 500);
          });
          return;
        }
        top.setValue(Math.max(gestureState.dy, 10)); // Ensure the value is non-negative
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styleSheet.container,
        { transform: [{ translateY: top }], position: "absolute" },
      ]}
      // Apply panHandlers here
    >
      <View style={styleSheet.grabberContainer} {...panResponder.panHandlers}>
        <View style={styleSheet.grabber}></View>
      </View>
      <View
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </Animated.View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#303030",
    position: "absolute",
    zIndex: 999,
    height: SCREEN_HEIGHT,
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  grabberContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  grabber: {
    height: 10,
    borderRadius: 10,
    width: "50%",
    backgroundColor: "white",
    marginTop: 20,
  },
});
