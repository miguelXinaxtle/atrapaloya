import React from 'react';
import {View, StyleSheet} from 'react-native';
import {array} from 'prop-types';
import {Text} from 'components';

const Abilities = ({abilities}) => {
  return (
    <>
      <Text style={styles.title} type="subtitle">
        Habilidades
      </Text>
      <View style={styles.body}>
        {abilities.map((item, index) => (
          <Text type="body" key={index.toString()}>
            {'\u2B24'} {item.ability.name}
          </Text>
        ))}
      </View>
    </>
  );
};

Abilities.propTypes = {
  abilities: array,
};

export default Abilities;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 10,
  },
  body: {
    paddingHorizontal: 20,
  },
});
