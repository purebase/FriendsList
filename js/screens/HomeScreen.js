import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import FriendListItem from '../components/FriendListItem';

export default class HomeScreen extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { first: 'Alice', last: 'Smith', email: 'test1@example.com' },
            { first: 'Bob', last: 'Smith', email: 'test2@example.com' },
            { first: 'Joe', last: 'Smith', email: 'test3@example.com' },
            { first: 'Jane', last: 'Smith', email: 'test4@example.com' }
          ]}
          keyExtractor={item => item.email}
          renderItem={({ item }) => (
            <FriendListItem
              friend={item}
              onPress={() =>
                this.props.navigation.navigate('FriendScreen', {
                  friend: item
                })
              }
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
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
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightsalmon',
    marginVertical: 5
  }
});
