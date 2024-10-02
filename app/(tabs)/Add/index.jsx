import React, { useEffect, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { Image, ScrollView, View } from "react-native";
import Assest from "./Assest";

export default AddPost = () => {
  const [albums, setAlbums] = useState([]);
  const [permissionRes, setPermissionRes] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState()

  const fetchAlbums = async () => {
    if (permissionRes?.status !== "granted") {
      await setPermissionRes()
    } else {
      const albums = await MediaLibrary.getAlbumsAsync();
      setAlbums(albums);
    }
  }

  useEffect(() => {
    fetchAlbums()
  }, [permissionRes?.status])
  return (

    <View style={{ flex: 1, backgroundColor: "black" }} >
      {/* preview */}
      <View style={{ width: "100%", height: "50%", backgroundColor: "black" }}>
        <Image source={{ uri: selectedImage }} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }} />
      </View>
      <Assest setSelectedImage={setSelectedImage} />
    </View>

  )
}