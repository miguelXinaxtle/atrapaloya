import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {string} from 'prop-types';
import {Text} from 'components';

const Sprites = ({front_default, front_female, front_shiny}) => {
  return (
    <>
      <Text style={styles.title} type="subtitle">
        Miniaturas
      </Text>
      <View style={styles.itemContainer}>
        {front_default && (
          <Image style={styles.sprite} source={{uri: front_default}} />
        )}
        {front_female && (
          <Image style={styles.sprite} source={{uri: front_female}} />
        )}
        {front_shiny && (
          <Image style={styles.sprite} source={{uri: front_shiny}} />
        )}
      </View>
    </>
  );
};

Sprites.propTypes = {
  front_default: string,
  front_female: string,
  front_shiny: string,
};

export default Sprites;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sprite: {
    height: 70,
    width: 70,
  },
});
