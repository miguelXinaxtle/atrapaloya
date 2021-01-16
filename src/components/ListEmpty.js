import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ListEmpty = ({text}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default ListEmpty;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});
