import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'react-native';

export default function TabLayout() {
  return (
    <>
      <StatusBar backgroundColor={Colors.backgroundColor} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#FFFF33',
          tabBarStyle: {
            backgroundColor: Colors.backgroundColor,
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome size={27} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome size={25} name="search" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Post"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="add-circle-outline" size={28} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="reels"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome size={25} name="play" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(profile)"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome size={25} name="user" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
