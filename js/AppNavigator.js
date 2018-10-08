import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'expo';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
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
