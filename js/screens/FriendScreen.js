import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text } from 'react-native';

export default class FriendScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('friend')
    };
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.container}
      >
        <Image style={styles.image} source={require('../../assets/icon.png')} />
        <Text>{navigation.getParam('friend')}</Text>
      </ScrollView>
    );
  }
}

const width = Dimensions.get('window').width * 0.75;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  scrollview: {
    backgroundColor: '#fff'
  },
  image: {
    width: width,
    height: width,
    marginBottom: 20
  }
});
