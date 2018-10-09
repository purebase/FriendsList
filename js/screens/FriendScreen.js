import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class FriendScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('friend')
    };
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>{navigation.getParam('friend')}</Text>
        <Button title="Gehe zurück" onPress={() => navigation.goBack()} />
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
