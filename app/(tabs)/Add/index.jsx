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
          height: "100%",
          border: 2,
        }}
      >
        {albums &&
          albums.map((album, index) => {
            return index < 20 && <AlbumEntry album={album} />;
          })}
      </View>
    </ScrollView>
  );
}
