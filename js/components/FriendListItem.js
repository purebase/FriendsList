import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function(props) {
  const { friend, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{friend.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
