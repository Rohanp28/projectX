import React from "react";
import { Stack } from "expo-router";
import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (

    <SafeAreaView style={styleSheet.container}>
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  )
}

const styleSheet = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "red"
  }
})