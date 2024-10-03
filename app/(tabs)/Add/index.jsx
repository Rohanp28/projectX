import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { Image, ScrollView, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Assest from "./Assest";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default AddPost = () => {
  const [albums, setAlbums] = useState([]);
  const [permissionRes, setPermissionRes] = MediaLibrary.usePermissions();
  const [resizeModeFull, setResizeMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const fetchAlbums = async () => {
    if (permissionRes?.status !== "granted") {
      await setPermissionRes();
    } else {
      const albums = await MediaLibrary.getAlbumsAsync();
      setAlbums(albums);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, [permissionRes?.status]);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {/* preview */}
      <View
        style={{
          width: "100%",
          height: "50%",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <Image
          source={{ uri: selectedImage }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: `${resizeModeFull ? "contain" : "cover"}`,
          }}
        />
        {/* resize small (contain) */}
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
            padding: 5,
            backgroundColor: "#202020",
            borderRadius: 100,
          }}
          onPress={() => {
            setResizeMode(!resizeModeFull);
          }}
        >
          <Entypo
            name={resizeModeFull ? "resize-full-screen" : "resize-100"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            padding: 5,
            backgroundColor: "#202020",
            borderRadius: 100,
          }}
        >
          <MaterialIcons name="navigate-next" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Assest setSelectedImage={setSelectedImage} />
    </View>
  );
};
