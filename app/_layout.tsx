import React from "react";
import { Stack } from "expo-router";
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from "react-native";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="white" />
      <KeyboardAvoidingView behavior="height" style={{ display: "flex", flex: 1 }}>
        <SafeAreaView style={styleSheet.container}>
          <Stack screenOptions={{
            headerShown: false
          }}>

            <Stack.Screen name="index" />
          </Stack >
        </SafeAreaView >
      </KeyboardAvoidingView>
    </>
  )
}

const styleSheet = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: StatusBar.currentHeight,
    flex: 1
  }
})