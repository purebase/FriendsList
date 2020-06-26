import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import FriendScreen from './screens/FriendScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: 'aliceblue' },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FriendScreen"
        component={FriendScreen}
        options={({ route }) => {
          const friend = route.params?.friend;
          return {
            headerBackTitle: null,
            headerTruncatedBackTitle: null,
            headerTitle: `${friend.name.first} ${friend.name.last}`,
          };
        }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            icon = focused ? 'settings' : 'settings-outline';
          }

          return (
            <MaterialCommunityIcons
              name={icon}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'darkorange',
        style: { backgroundColor: 'aliceblue' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ title: 'Freunde' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Einstellungen' }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
