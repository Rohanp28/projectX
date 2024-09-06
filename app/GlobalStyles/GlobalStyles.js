import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

export function useGlobalStyles() {
  const [loaded, error] = useFonts({
    "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
    "Oswald-Regular": require("../../assets/fonts/Oswald-Regular.ttf"),
    "Inter_18pt-Regular": require("../../assets/fonts/Inter_18pt-Regular.ttf"),
  });
  const [globalStyles, setGlobalStyles] = useState([]);
  useEffect(() => {
    if (loaded) {
      const styleSheet = StyleSheet.create({
        text: {
          fontFamily: "Montserrat-Regular",
          fontSize: 18,
        },
      });

      setGlobalStyles(styleSheet);
    }
  }, [loaded]);

  return [globalStyles, loaded];
}
