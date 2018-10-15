import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import FriendListItem from '../components/FriendListItem';

export default class HomeScreen extends Component {
  static navigationOptions = { header: null };

  state = { data: [], isLoading: true };

  _fetchData = async () => {
    const data = [
      { first: 'Alice', last: 'Smith', email: 'test1@example.com' },
      { first: 'Bob', last: 'Smith', email: 'test2@example.com' },
      { first: 'Joe', last: 'Smith', email: 'test3@example.com' },
      { first: 'Jane', last: 'Smith', email: 'test4@example.com' }
    ];
    // Simulation: 3 Sekunden
    await new Promise(_ => setTimeout(_, 3000));
    this.setState({ data, isLoading: false });
  };

  componentDidMount() {
    this._fetchData();
  }

  render() {
    if (this.state.isLoading)
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="darkorange" />
        </View>
      );
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
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
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 30
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightsalmon',
    marginVertical: 5
  }
});
