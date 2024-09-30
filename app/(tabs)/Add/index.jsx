import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useGlobalStyles } from "../../../Components/GlobalStyles/GlobalStyles";
import * as MediaLibrary from "expo-media-library";
import { AlbumEntry } from "./AlbumEntry";

export default function Add() {
  const [globalStyles, loaded] = useGlobalStyles();
  const [albums, setAlbums] = useState(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  async function getAlbums() {
    console.log("entered");
    console.log("permission Response ==>", permissionResponse);
    if (permissionResponse?.status !== "granted") {
      await requestPermission();
    }
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true,
    });
    setAlbums(fetchedAlbums);
  }
  useEffect(() => {
    getAlbums();
  }, [permissionResponse?.status]);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "" }}>
      {/* top header */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text style={{ ...globalStyles.text, color: "black" }}>
          Select Post
        </Text>
        <Text style={{ ...globalStyles.text, color: "yellow" }}>Next</Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 200,
          border: 2,
          padding: 50,
          marginLeft: 50,
        }}
      >
        {albums &&
          albums.map((album) => {
            return <AlbumEntry album={album} />;
          })}
      </View>
    </ScrollView>
  );
}
