import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
        <Image style={styles.image} source={require('../../assets/icon.png')} />
        <Text>{navigation.getParam('friend')}</Text>
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
