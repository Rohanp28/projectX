import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Touchable,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { TouchableOpacity } from "react-native";
import { useGlobalStyles } from "../../../Components/GlobalStyles/GlobalStyles";

export default function MediaGallery({ setSelectedImage }) {
  const [assets, setAssets] = useState([]);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [loading, setLoading] = useState(false); // For showing the loader at the bottom
  const [pageInfo, setPageInfo] = useState({
    hasNextPage: true,
    endCursor: null, // Will be used for pagination
  });
  const [globalStyles, loaded] = useGlobalStyles();

  // Fetch assets when component mounts or when permissions change
  useEffect(() => {
    if (permissionResponse?.status === "granted") {
      loadAssets();
    } else {
      requestPermission();
    }
  }, [permissionResponse?.status]);

  // Function to fetch assets in chunks
  const loadAssets = async () => {
    if (loading || !pageInfo.hasNextPage) return; // Don't fetch if already loading or no more assets

    setLoading(true);
    try {
      const result = await MediaLibrary.getAssetsAsync({
        first: 500, // Number of assets to fetch in each batch
        mediaType: ["photo", "video"], // Fetch both photos and videos
        after: pageInfo.endCursor, // Pagination: fetch after the last cursor
        sortBy: "creationTime",
      });

      setAssets((prevAssets) => [...prevAssets, ...result.assets]); // Append new assets to the existing list
      setPageInfo({
        hasNextPage: result.hasNextPage,
        endCursor: result.endCursor, // Update the cursor for the next fetch
      });
    } catch (error) {
      console.log("Error loading assets:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Render each asset
  const renderAsset = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedImage(item.uri)}>
      <Image
        source={{ uri: item.uri }}
        style={{ width: 100, height: 100, margin: 5, borderRadius: 4 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  // Handle end of list scroll
  const handleLoadMore = () => {
    if (!loading && pageInfo.hasNextPage) {
      loadAssets(); // Fetch more assets when user scrolls to the end
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {assets.length > 0 ? (
        <FlatList
          data={assets}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={renderAsset}
          onEndReached={handleLoadMore} // Load more assets when reaching end of the list
          onEndReachedThreshold={0.5} // Fetch more when 50% from the end
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" color="#0000ff" /> : null // Loader at the bottom
          }
        />
      ) : (
        <Text style={{ ...globalStyles.text, color: "white" }}>
          No media found
        </Text>
      )}
    </View>
  );
}
