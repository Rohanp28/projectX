import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Search = () => {
  return (
    <View style={styleSheet.container}>
      <View style={{ width: "100%", overflow: 'hidden', backgroundColor: "#303030", display: "flex", flexDirection: "row", gap: 10, alignItems: "center", padding: 5, borderRadius: 10 }}>
        <FontAwesome size={18} name="search" color={"white"} />
        <TextInput style={{ color: "white", maxWidth: "90%" }} placeholderTextColor={"#909090"} placeholder='Search' />
      </View>
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
    padding: 10
  }
})
