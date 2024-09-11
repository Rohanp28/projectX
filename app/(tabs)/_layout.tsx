import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: 'black' },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          // title: 'Home',

          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          // title: 'Search',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          // title: 'Reels',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="play" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          // title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
