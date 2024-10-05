import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import { useGlobalStyles } from '../../../Components/GlobalStyles/GlobalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CustomTextInput } from '../../../Components/CustomTextInput';

const EditProfileScreen = ({ route, navigation }) => {
  const { name, userName, bio, profileImage } = route.params;

  const [profileName, setProfileName] = useState(name);
  const [profileUserName, setProfileUserName] = useState(userName);
  const [profileBio, setProfileBio] = useState(bio);

  const [globalStyles, loaded] = useGlobalStyles();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={{ ...globalStyles.text, color: 'white' }}>
          Edit Profile
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="checkmark" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileImageContainer}>
        <Image
          source={profileImage}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        <Text style={{ ...globalStyles.text, color: '#3493D9' }}>
          change profile picture
        </Text>
      </View>

      <View>
        <View style={styles.inputContainer}>
          <Text
            style={{ ...globalStyles.text, color: 'white', marginBottom: 5 }}
          >
            Name
          </Text>
          <TextInput
            value={profileName}
            onChangeText={setProfileName}
            placeholder="name"
            placeholderTextColor="#888"
            style={{
              ...globalStyles.text,
              color: 'white',
              marginBottom: 5,
              height: 40,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={{ ...globalStyles.text, color: 'white', marginBottom: 5 }}
          >
            UserName
          </Text>
          <TextInput
            value={profileUserName}
            onChangeText={setProfileUserName}
            placeholder="username"
            placeholderTextColor="#888"
            style={{
              ...globalStyles.text,
              color: 'white',
              marginBottom: 5,
              height: 40,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text
            style={{ ...globalStyles.text, color: 'white', marginBottom: 5 }}
          >
            Bio
          </Text>
          <TextInput
            value={profileBio}
            onChangeText={setProfileBio}
            placeholder="Bio"
            placeholderTextColor="#888"
            style={{
              ...globalStyles.text,
              color: 'white',
              marginBottom: 5,
              height: 40,
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              ...globalStyles.text,
              color: '#3493D9',
              borderTopWidth: 1, // Top border
              borderBottomWidth: 1, // Middle border (bottom of the first text)
              borderColor: '#888',
              padding: 10,
            }}
          >
            Switch to Professional account
          </Text>

          <Text
            style={{
              ...globalStyles.text,
              color: '#3493D9',
              borderBottomWidth: 1, // Bottom border
              borderColor: '#888',
              padding: 10,
            }}
          >
            Personal information Settings
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 10,
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
});

export default EditProfileScreen;
