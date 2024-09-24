import React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
} from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useGlobalStyles } from '@/Components/GlobalStyles/GlobalStyles';
import { Colors } from '@/constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SearchTiles } from '@/Components/SearchTiles/SearchTiles';

let { width, height } = Dimensions.get('window');
const Profile = () => {
  const [globalStyles, loaded] = useGlobalStyles();

  const images = [
    require('../../assets/Image/testImage.jpg'),
    require('../../assets/Image/testImage.jpg'),
    require('../../assets/Image/testImage.jpg'),
    require('../../assets/Image/testImage.jpg'),
  ];

  renderSection = () => {
    return (
      <View style={styles.posts}>
        <FlatList
          data={images}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item} style={styles.image} />
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <FontAwesome6 name="lock" size={20} color="white" />
          <Text
            style={{
              ...globalStyles.textBold,
              fontSize: 18,
              color: 'white',
              paddingVertical: 5,
            }}
          >
            __rohan____28__
          </Text>
        </View>
        <SimpleLineIcons name="menu" size={20} color="white" />
      </View>

      <View style={styles.profileInfo}>
        <Image
          source={require('../../assets/Image/testImage.jpg')}
          style={styles.profileImage}
        />

        <View style={styles.stat}>
          <Text
            style={{
              ...globalStyles.textBold,
              fontSize: 16,
              color: 'white',
            }}
          >
            1
          </Text>
          <Text
            style={{
              ...globalStyles.text,
              fontSize: 16,
              color: 'white',
            }}
          >
            posts
          </Text>
        </View>

        <View style={styles.stat}>
          <Text
            style={{
              ...globalStyles.textBold,
              fontSize: 16,
              color: 'white',
            }}
          >
            298
          </Text>
          <Text
            style={{
              ...globalStyles.text,
              fontSize: 16,
              color: 'white',
            }}
          >
            followers
          </Text>
        </View>

        <View style={styles.stat}>
          <Text
            style={{
              ...globalStyles.textBold,
              fontSize: 16,
              color: 'white',
            }}
          >
            399
          </Text>
          <Text
            style={{
              ...globalStyles.text,
              fontSize: 16,
              color: 'white',
            }}
          >
            following
          </Text>
        </View>
      </View>

      <View style={styles.aboutSection}>
        <Text
          style={{
            ...globalStyles.textBold,
            fontSize: 16,
            color: 'white',
          }}
        >
          Rohan
        </Text>
        <Text
          style={{
            ...globalStyles.text,
            fontSize: 14,
            color: 'white',
          }}
        >
          My life, my rules.....
        </Text>
      </View>

      <View>
        <View style={styles.actionButton}>
          <Button title="Learn More">1</Button>
          <Button title="Learn More">1</Button>
          <Button title="Learn More">1</Button>
          <Button title="Learn More">1</Button>
        </View>
      </View>
      {this.renderSection()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  stat: {
    alignItems: 'center',
  },
  aboutSection: {
    padding: 10,
    paddingTop: 5,
  },
  actionButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  posts: {
    flex: 1,
    marginTop: 5,
  },
  imageContainer: {
    width: width / 3,
    height: width / 3,
    padding: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Profile;
