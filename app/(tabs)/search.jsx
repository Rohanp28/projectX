import { Colors } from '@/constants/Colors';
import React, { useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import { SearchTiles } from '../../Components/SearchTiles/SearchTiles'

const Search = () => {
  const scrollViewRef = useRef(null);

  const [scrollPosY, setScrollPosY] = useState(0);

  const handleScroll = (e) => {
    // e.persist();
    // if (viewRef.current) {
    //   viewRef.current.measureLayout(scrollViewRef.current, (x, y, width, height) => {
    //     const scrollY = e.nativeEvent.contentOffset.y;
    //     const viewBottom = y + height / 2;
    //     const isVisible = viewBottom > scrollY;
    //     console.log(viewBottom);
    //     setIsViewVisible(isVisible);
    //   })
    // }
    setScrollPosY(e.nativeEvent.contentOffset.y)

  }
  return (
    <View style={styleSheet.container}>
      <View style={styleSheet.searchBarContainer}>
        <FontAwesome size={18} name="search" color={"white"} />
        <TextInput style={{ color: "white", width: "90%" }} placeholderTextColor={"#909090"} placeholder='Search' />
      </View>
      <View style={{ paddingTop: 15, paddingLeft: 10 }}>
        <ScrollView
          style={{ margin: "auto", width: "100%" }}
          onScroll={handleScroll}
          ref={scrollViewRef}>
          <View style={{ display: 'flex', flexDirection: "row", flexWrap: 'wrap', margin: 'auto', }}>
            <SearchTiles autoPlay={true} scrollPos={scrollPosY} scrollViewRef={scrollViewRef} index={0} />
            <SearchTiles scrollPos={scrollPosY} scrollViewRef={scrollViewRef} index={1} />
            <SearchTiles scrollPos={scrollPosY} scrollViewRef={scrollViewRef} index={2} />
            <SearchTiles scrollPos={scrollPosY} scrollViewRef={scrollViewRef} index={3} />
            <SearchTiles scrollPos={scrollPosY} scrollViewRef={scrollViewRef} index={4} />
            <SearchTiles scrollPos={scrollPosY} scrollViewRef={scrollViewRef} index={5} />
          </View>
        </ScrollView>
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
  },
  searchBarContainer: {
    width: "100%",
    overflow: 'hidden',
    backgroundColor: "#303030",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    paddingLeft: 15
  },
  searchTilesContainer: {
    width: "50%",
    height: 300,
    padding: 2,
  }
})
