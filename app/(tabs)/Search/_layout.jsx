import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

export default function RootSearchLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="SearchDetailsPage" />
      </Stack>
    </SafeAreaView>
  );
}
