import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Icon } from 'expo';

import HomeScreen from './screens/HomeScreen';
import FriendScreen from './screens/FriendScreen';
import SettingsScreen from './screens/SettingsScreen';

const HomeStack = createStackNavigator(
  { HomeScreen, FriendScreen },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: 'aliceblue' }
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Freunde',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Feather name="home" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Einstellungen',
        tabBarIcon: ({ tintColor }) => (
          <Icon.Feather name="settings" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'darkorange',
      style: {
        backgroundColor: 'aliceblue'
      }
    }
  }
);

export default createAppContainer(TabNavigator);
