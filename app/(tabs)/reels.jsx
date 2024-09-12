import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import { useGlobalStyles } from '../../Components/GlobalStyles/GlobalStyles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const Reels = () => {
  const [globalStyles, loaded] = useGlobalStyles();
  if (!loaded) {
    return <Text>loading ..</Text>;
  }

  const posts = [
    {
      accountProfileLogo: '',
      accountUsername: 'timesOfIndia',
      post: 'https://cdn.pixabay.com/photo/2020/05/15/14/17/water-5173774_960_720.jpg',
      noOfLikes: 28,
      noOfComments: 25,
      caption:
        'my first post saasasasasas asasasasasa asasasas asasasa asasasas asasas a.......!!',
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
    },
    {
      accountProfileLogo: '',
      accountUsername: 'timesOfIndia',
      post: 'https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_1280.jpg',
      noOfLikes: 28,
      noOfComments: 25,
      caption:
        'my first post saasasasasas asasasasasa asasasas asasasa asasasas asasas a.......!!',
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
    },
    {
      accountProfileLogo: '',
      accountUsername: 'timesOfIndia',
      post: 'https://cdn.pixabay.com/photo/2023/06/16/15/14/sunset-8068208_1280.jpg',
      noOfLikes: 28,
      noOfComments: 25,
      caption:
        'my first post saasasasasas asasasasasa asasasas asasasa asasasas asasas a.......!!',
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
    },
    {
      accountProfileLogo: '',
      accountUsername: 'timesOfIndia',
      post: 'https://cdn.pixabay.com/photo/2024/02/22/15/18/clouds-8590310_1280.jpg',
      noOfLikes: 28,
      noOfComments: 25,
      caption:
        'my first post saasasasasas asasasasasa asasasas asasasa asasasas asasas a.......!!',
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
    },
  ];
  const Item = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Text
            style={{
              ...globalStyles.textBold,
              fontSize: 23,
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              color: 'white',
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            {item.accountProfileLogo} {item.accountUsername}
          </Text>
          <SimpleLineIcons name="options-vertical" size={18} color="white" />
        </View>
        <View style={styles.postImage}>
          <Image
            style={styles.postPhoto}
            source={{
              uri: item.post,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.postFooter}>
          <FontAwesome size={23} name="heart-o" color="white" />
          <Text
            style={{
              ...globalStyles.textBold,
              fontSize: 14,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 10,
              color: 'white',
            }}
          >
            {item.noOfLikes}
          </Text>
          <FontAwesome size={23} name="comment-o" color="white" />
          <Text
            style={{
              ...globalStyles.textBold,
              fontSize: 14,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              paddingRight: 10,
              color: 'white',
            }}
          >
            {item.noOfComments}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
          }}
        >
          <Text style={{ ...globalStyles.text, fontSize: 16, color: 'white' }}>
            <Text
              style={{ ...globalStyles.textBold, fontSize: 18, color: 'white' }}
            >
              {item.accountUsername}
            </Text>{' '}
            {item.caption}
          </Text>
        </View>
        <Text
          style={{ ...globalStyles.textBold, fontSize: 14, color: 'white' }}
        >
          View all comments
        </Text>
        <Text style={{ ...globalStyles.textBold, fontSize: 12, color: 'grey' }}>
          28 hours ago
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Item item={item} />}
        // keyExtractor={(item) => item.id}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    gap: 8,
    width: '100%',
    backgroundColor: 'black',
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  postImage: {
    marginTop: 5,
    height: 600,
  },
  postPhoto: {
    height: '100%',
    width: '100%', // Adjusts the width to fit the screen
    aspectRatio: 1, // Keeps the aspect ratio consistent
  },
  postFooter: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    paddingRight: 10,
    marginTop: 5,
  },
});

export default Reels;
