import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from 'components';
import {string} from 'prop-types';

const EvolutionItem = ({name, uri}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{uri}} />
    <Text type="subtitle">{name}</Text>
  </View>
);

EvolutionItem.propTypes = {
  name: string,
  uri: string,
};

export default EvolutionItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 20,
  },
});
