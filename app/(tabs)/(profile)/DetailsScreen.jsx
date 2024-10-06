// screens/DetailsScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors';
import { useGlobalStyles } from '../../../Components/GlobalStyles/GlobalStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';

const DetailsScreen = () => {
  const [globalStyles, loaded] = useGlobalStyles();

  const data1 = [
    {
      name: 'Saved',
      icon: <Ionicons name="bookmark-outline" size={25} color="white" />,
    },
    {
      name: 'Archive',
      icon: <FontAwesome6 name="clock-rotate-left" size={20} color="white" />,
    },
    {
      name: 'Your activity',
      icon: <Feather name="activity" size={24} color="white" />,
    },
    {
      name: 'Notifications',
      icon: <Ionicons name="notifications-outline" size={30} color="white" />,
    },
    {
      name: 'Account privacy',
      icon: <Ionicons name="lock-closed-outline" size={30} color="white" />,
    },
    {
      name: 'Close friends',
      icon: <Ionicons name="star-outline" size={30} color="white" />,
    },
    {
      name: 'Blocked',
      icon: <Ionicons name="remove-circle-outline" size={30} color="white" />,
    },
    {
      name: 'Tags and mentions',
      icon: <Ionicons name="at-outline" size={30} color="white" />,
    },
    {
      name: 'Comments',
      icon: <Ionicons name="chatbubble-outline" size={30} color="white" />,
    },
    {
      name: 'Follow and invite friends',
      icon: <Ionicons name="person-add-outline" size={25} color="white" />,
    },
    {
      name: 'Favourites',
      icon: <Ionicons name="star-outline" size={30} color="white" />,
    },
    {
      name: 'Muted account',
      icon: <Ionicons name="volume-mute-outline" size={30} color="white" />,
    },
    {
      name: 'Suggested content',
      icon: <Ionicons name="bulb-outline" size={30} color="white" />,
    },
    {
      name: 'Like and share counts',
      icon: <Ionicons name="eye-off-outline" size={30} color="white" />,
    },
    {
      name: 'Device permission',
      icon: <Ionicons name="shield-outline" size={30} color="white" />,
    },
    {
      name: 'Account type and tools',
      icon: <Ionicons name="person-circle-outline" size={30} color="white" />,
    },
    {
      name: 'Help',
      icon: <Ionicons name="help-circle-outline" size={30} color="white" />,
    },
    {
      name: 'Privacy Center',
      icon: <Ionicons name="lock-closed-outline" size={30} color="white" />,
    },
    {
      name: 'Account Status',
      icon: (
        <Ionicons name="checkmark-circle-outline" size={30} color="white" />
      ),
    },
    {
      name: 'About',
      icon: (
        <Ionicons name="information-circle-outline" size={30} color="white" />
      ),
    },
  ];

  const RowItem = ({ item, index }) => {
    return (
      <View style={styles.row}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <View style={{ width: 30 }}>
            <Text>{item.icon}</Text>
          </View>
          <Text
            style={{ ...globalStyles.text, color: 'white', marginLeft: 10 }}
          >
            {item.name}
          </Text>
        </View>
        <FontAwesome name="angle-right" size={24} color="white" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.searchBarContainer} onPress={() => {}}>
        <FontAwesome size={18} name="search" color={'white'} />
        <Text style={{ ...globalStyles.text, color: 'white' }}>Search</Text>
      </Pressable>
      <View>
        <Text
          style={{
            ...globalStyles.text,
            fontSize: 14,
            color: 'grey',
            padding: 5,
          }}
        >
          Your account
        </Text>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={data1.map((item, index) => ({
            id: index.toString(),
            name: item,
          }))}
          renderItem={({ item }) => <RowItem item={item.name} />}
          keyExtractor={(item) => item.id}
          ListFooterComponent={
            <View style={styles.footer}>
              <Text style={{ ...globalStyles.text, color: '#3493D9' }}>
                Add account
              </Text>
              <Text style={{ ...globalStyles.text, color: 'red' }}>
                Log out
              </Text>
              <Text style={{ ...globalStyles.text, color: 'red' }}>
                Log out of all accounts
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.backgroundColor, padding: 10 },
  searchBarContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#303030',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  footer: {
    padding: 10,
    gap: 10,
    borderWidth: 2,
    borderTopColor: '#303030',
  },
});

export default DetailsScreen;
