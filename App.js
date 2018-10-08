import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class Screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SCREEN1</Text>
      </View>
    );
  }
}

class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SCREEN2</Text>
      </View>
    );
  }
}

const AppNavigator = createBottomTabNavigator({
  Home: Screen1,
  Settings: Screen2
});

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
