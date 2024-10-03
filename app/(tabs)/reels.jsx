import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useGlobalStyles } from '../../Components/GlobalStyles/GlobalStyles';
import Feather from '@expo/vector-icons/Feather';
import ReelsComponent from '../../Components/ReelsComponent/ReelsComponent';
import { Video } from 'expo-av';
const Reels = () => {
  const [globalStyles, loaded] = useGlobalStyles();

  if (!loaded) {
    return <Text>loading ..</Text>;
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'black',
        position: 'relative',
      }}
    >
      <View style={styles.headerContainer}>
        <Text
          style={{
            ...globalStyles.textBold,
            fontSize: 20,
            color: 'white',
          }}
        >
          Reels
        </Text>
        <Feather name="camera" size={25} color="white" />
      </View>
      <ReelsComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
    padding: 15,
  },
});

export default Reels;
