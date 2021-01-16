import React from 'react';
import {View, StyleSheet} from 'react-native';
import {string} from 'prop-types';

const ListSeparator = ({color}) => {
  return <View style={[styles.separator, styles['color-line'](color)]} />;
};

export default ListSeparator;

ListSeparator.propTypes = {
  color: string,
};

ListSeparator.defaultProps = {
  color: '#EAEAEA',
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 2,
    borderTopColor: '#EAEAEA',
  },
  ['color-line'](borderTopColor) {
    borderTopColor;
  },
});
