import React from 'react';
import {Image, StyleSheet} from 'react-native';

const logo = require('../../assets/img/logo.png');
const Logo = () => <Image source={logo} style={styles.logo} />;

export default Logo;

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: '100%',
    resizeMode: 'contain',
    marginVertical: 20,
  },
});
