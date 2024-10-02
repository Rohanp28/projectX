import React, { useRef, useState } from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import { Video } from 'expo-av';
import SwiperFlatList from 'react-native-swiper-flatlist';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { useGlobalStyles } from '../GlobalStyles/GlobalStyles';

const ReelsComponent = () => {
  const videoData = [
    {
      video: require('../../assets/videos/reel1.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'sanatansage',
      description: 'my life my rules',
      likes: '25M',
      comments: '50k',
      shares: '10k',
    },
    {
      video: require('../../assets/videos/reel2.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'krishna_edits',
      description: 'my life my rulesssssss',
      likes: '6M',
      comments: '40k',
      shares: '5k',
    },
    {
      video: require('../../assets/videos/reel3.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'marathisongs',
      description: 'my life my rules',
      likes: '700k',
      comments: '10k',
      shares: '5k',
    },
    {
      video: require('../../assets/videos/reel4.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'comedy_tmkoc',
      description: 'my life my rules',
      likes: '400k',
      comments: '5k',
      shares: '4k',
    },
    {
      video: require('../../assets/videos/reel5.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'krishna_edits',
      description: 'my life my rules',
      likes: '1M',
      comments: '40k',
      shares: '4k',
    },
    {
      video: require('../../assets/videos/reel6.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'comedy.in',
      description: 'my life my rules',
      likes: '200k',
      comments: '5k',
      shares: '4k',
    },
    {
      video: require('../../assets/videos/reel7.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'coder.dev',
      description: 'my life my rules',
      likes: '100k',
      comments: '5k',
      shares: '4k',
    },
    {
      video: require('../../assets/videos/reel8.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'comedy.in',
      description: 'my life my rules',
      likes: '200k',
      comments: '3k',
      shares: '2k',
    },
    {
      video: require('../../assets/videos/reel9.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'sanatansage',
      description: 'my life my rules',
      likes: '5M',
      comments: '5k',
      shares: '4k',
    },
    {
      video: require('../../assets/videos/reel10.mp4'),
      postProfile: require('../../assets/Image/test1.jpg'),
      title: 'dhoni7.forever',
      description: 'my life my rules',
      likes: '10M',
      comments: '50k',
      shares: '4k',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = ({ index }) => {
    setCurrentIndex(index);
  };

  const SingleItem = ({ item, index }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [globalStyles, loaded] = useGlobalStyles();

    const [like, setLike] = useState(false);

    return (
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          position: 'relative',
        }}
      >
        <Video
          source={item.video} // Use dynamic item.video here
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
          resizeMode="cover"
          shouldPlay={currentIndex === index} // Play only if this video is current
          isMuted={false}
          onBuffer={(buffer) => console.log('buffer', buffer)}
          onError={(error) => console.error('Video Error:', error)}
          repeat={true} // Ensure the video repeats
        />

        <View
          style={{
            position: 'absolute',
            width: windowWidth,
            zIndex: 1,
            bottom: 50,
            padding: 5,
          }}
        >
          <View style={{}}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 0,
                }}
              >
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 100,
                    margin: 10,
                  }}
                >
                  <Image
                    source={item.postProfile}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 100,
                    }}
                  />
                </View>
                <Text
                  style={{
                    ...globalStyles.textBold,
                    color: 'white',
                    fontSize: 16,
                  }}
                >
                  {item.title}
                </Text>
                <TouchableOpacity style={{ marginHorizontal: 5 }}>
                  <Text
                    style={{
                      ...globalStyles.textBold,
                      fontSize: 12,
                      color: 'white',
                      textAlign: 'center',
                      backgroundColor: '#69696980',
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                    }}
                  >
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                ...globalStyles.text,
                color: 'white',
                fontSize: 16,
                marginHorizontal: 10,
              }}
            >
              {item.description}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                padding: 5,
                paddingHorizontal: 10,
                marginTop: 10,
                gap: 5,
                backgroundColor: '#232023',
                borderRadius: 20,
                alignSelf: 'flex-start',
              }}
            >
              <Ionicons name="musical-notes" size={16} color="white" />
              <Text
                style={{
                  ...globalStyles.text,
                  color: 'white',
                  fontSize: 14,
                }}
              >
                Original audio
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 50,
            right: 0,
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => setLike(!like)}
            style={{ padding: 10, gap: 2 }}
          >
            <AntDesign
              name={like ? 'heart' : 'hearto'}
              size={24}
              color={like ? 'red' : 'white'}
            />
            <Text
              style={{
                ...globalStyles.text,
                color: 'white',
                fontSize: 12,
                textAlign: 'center',
              }}
            >
              {item.likes}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 10, gap: 2 }}>
            <Ionicons name="chatbubble-outline" size={24} color="white" />
            <Text
              style={{
                ...globalStyles.text,
                color: 'white',
                fontSize: 12,
                textAlign: 'center',
              }}
            >
              {item.comments}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ padding: 10, gap: 2 }}>
            <Ionicons name="paper-plane-outline" size={24} color="white" />
            <Text
              style={{
                ...globalStyles.text,
                color: 'white',
                fontSize: 12,
                textAlign: 'center',
              }}
            >
              {item.shares}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, gap: 2 }}>
            <Feather name="more-vertical" size={24} color="white" />
          </TouchableOpacity>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'white',
              marginTop: 5,
            }}
          >
            <Image
              source={item.postProfile}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SwiperFlatList
      data={videoData}
      vertical={true}
      onChangeIndex={handleChange}
      renderItem={({ item, index }) => <SingleItem item={item} index={index} />}
    />
  );
};

export default ReelsComponent;
