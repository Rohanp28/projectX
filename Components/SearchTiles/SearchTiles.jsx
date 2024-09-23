import { Video } from 'expo-av'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

export const SearchTiles = ({ scrollPos, scrollViewRef, index }) => {
    const [isViewVisible, setIsViewVisible] = useState(true);
    const viewRef = useRef(null);
    useEffect(() => {
        viewRef.current.measureLayout(scrollViewRef.current, (x, y, width, height) => {
            const viewBottom = (y + height) / 2;
            console.log("y=>", y, " view bottom = ", viewBottom, "scroll pos=>", scrollPos, "for index =>", index);
            const isVisible = scrollPos < viewBottom && scrollPos >= y - 2;
            console.log("is visible? =>", isVisible);
            setIsViewVisible(isVisible);
        })
    }, [scrollPos])
    return (
        <View style={styleSheet.searchTilesContainer}>
            <View style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", width: "100%", height: "100%", }} ref={viewRef}>
                <Video
                    source={require('../../assets/videos/test1.mp4')}
                    style={{ width: "100%", height: "100%" }}
                    isLooping
                    resizeMode='cover'
                    shouldPlay={isViewVisible}
                    isMuted
                />
            </View>

        </View>
    )

}
const styleSheet = StyleSheet.create({
    searchTilesContainer: {
        width: "50%",
        height: 300,
        padding: 2,
    }
})
