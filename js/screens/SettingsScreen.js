import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'Abschnitt 1',
              data: [{ key: '1', name: 'Alice' }, { key: '2', name: 'Bob' }]
            },
            {
              title: 'Abschnitt 2',
              data: [{ key: '3', name: 'Alice2' }, { key: '4', name: 'Bob2' }]
            }
          ]}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {section.title}
            </Text>
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
