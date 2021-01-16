import React from 'react';
import {View, StyleSheet} from 'react-native';
import {array} from 'prop-types';
import {Text} from 'components';

const Types = ({types}) => {
  return (
    <>
      <Text style={styles.title} type="subtitle">
        Tipo
      </Text>
      <View style={styles.body}>
        {types.map((item, index) => (
          <Text type="body" key={index.toString()}>
            {'\u2B24'} {item.type.name}
          </Text>
        ))}
      </View>
    </>
  );
};

Types.propTypes = {
  types: array,
};

export default Types;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 10,
  },
  body: {
    paddingHorizontal: 20,
  },
});
