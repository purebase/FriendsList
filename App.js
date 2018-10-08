import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './js/screens/HomeScreen';
import SettingsScreen from './js/screens/SettingsScreen';

const AppNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
