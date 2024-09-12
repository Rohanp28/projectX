import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../../Components/Header/Header';
import { Stories } from '../../../Components/StoriesSection/StoriesSection';
import { Feed } from '../../../Components/Feed/Feed'



const Home = () => {
  return (
    <View style={styleSheet.container}>
      {/* header */}
      <Header />
      {/* stories */}
      <Stories />

      {/* flatlist */}
      <Feed />
      {/* flatlist */}
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Home;
