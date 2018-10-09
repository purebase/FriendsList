import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HOME SCREEN!!!!</Text>
        <Button
          title="Gehe zu Alice"
          onPress={() =>
            this.props.navigation.navigate('FriendScreen', { friend: 'Alice' })
          }
        />
        <Button
          title="Gehe zu Bob"
          onPress={() =>
            this.props.navigation.navigate('FriendScreen', { friend: 'Bob' })
          }
        />
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
