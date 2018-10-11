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
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Joe' },
            { name: 'Jane' }
          ]}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <FriendListItem
              friend={item}
              onPress={() =>
                this.props.navigation.navigate('FriendScreen', {
                  friend: item.name
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
