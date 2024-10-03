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

const DetailsScreen = () => {
  const [globalStyles, loaded] = useGlobalStyles();

  const data1 = [
    'Saved',
    'archive',
    'Your activity',
    'Notifications',
    'Account privacy',
    'Close friends',
    'Blocked',
    'Tags and mentions',
    'Comments',
    'Follow and invite friends',
    'Favourites',
    'Muted account',
    'Suggested content',
    'Like and share counts',
    'Device permission',
    'Account type and tools',
    'Help',
    'Privacy Center',
    'Account Status',
    'About',
    'Add acccount',
    'Log out',
    'Log out from all devices',
  ];

  const RowItem = ({ item, index }) => {
    return (
      <View style={styles.row}>
        <Ionicons name="notifications-outline" size={30} color="white" />
        <Text style={{ ...globalStyles.text, color: 'white' }}>{item}</Text>
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
      <SafeAreaView>
        <FlatList
          data={data1.map((item, index) => ({
            id: index.toString(),
            name: item,
          }))}
          renderItem={({ item, index }) => (
            <RowItem item={item.name} index={index} />
          )}
          keyExtractor={(item) => item.id}
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
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
  },
});

export default DetailsScreen;
