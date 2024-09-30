import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Image, StyleSheet, Text, View } from "react-native";

export const AlbumEntry = ({ album }) => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function getAlbumAssets() {
      const albumAssets = await MediaLibrary.getAssetsAsync({ album });
      setAssets(albumAssets.assets);
    }
    getAlbumAssets();
  }, [album]);

  return (
    <View key={album.id} style={styles.albumContainer}>
      <Text style={{ color: "black", fontSize: 24 }}>
        {album.title} - {album.assetCount ?? "no"} assets
      </Text>
      <View style={styles.albumAssetsContainer}>
        {assets &&
          assets.map((asset) => {
            return (
              <Image
                source={{ uri: asset.uri }}
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "red",
                  objectFit: "contain",
                }}
                key={asset.uri}
              />
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  albumContainer: {
    borderWidth: 2, // Use borderWidth instead of border
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
  albumTitle: {
    color: "black",
    fontSize: 24,
    marginBottom: 10,
  },
  albumAssetsContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Wrap images to fit within the view
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: "red",
  },
});
