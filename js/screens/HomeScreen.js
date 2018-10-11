import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: '1', name: 'Alice' },
            { key: '2', name: 'Bob' },
            { key: '3', name: 'Joe' },
            { key: '4', name: 'Jane' }
          ]}
          renderItem={({ item }) => (
            <Button
              title={`Gehe zu ${item.name}`}
              onPress={() =>
                this.props.navigation.navigate('FriendScreen', {
                  friend: item.name
                })
              }
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  }
});
