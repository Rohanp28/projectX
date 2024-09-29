import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';
import Profile from '../(profile)/index';
const Stack = createNativeStackNavigator();

export default function ProfileLayout() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" component={Profile} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      {/* <Stack.Screen name="index" /> */}
    </Stack.Navigator>
  );
}
