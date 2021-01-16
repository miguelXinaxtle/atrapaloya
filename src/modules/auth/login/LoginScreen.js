import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoginScreen = () => (
  <View style={styles.container}>
    <Text>Aqui va el login</Text>
  </View>
);

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
