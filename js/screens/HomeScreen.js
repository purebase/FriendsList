import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Joe' },
            { name: 'Jane' }
          ]}
          keyExtractor={item => item.name}
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
