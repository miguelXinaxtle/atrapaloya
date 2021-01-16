import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text} from 'components';
import {string, func} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const PokemonItem = ({name, image, goPokemon}) => (
  <TouchableOpacity onPress={goPokemon}>
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image style={styles.image} source={{uri: image}} />
        <Text type="subtitle">{name}</Text>
      </View>
      <Icon name="chevron-right" size={20} light color="#43485C" />
    </View>
  </TouchableOpacity>
);

PokemonItem.propTypes = {
  name: string,
  goPokemon: func,
};

export default PokemonItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
});
