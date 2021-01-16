import React from 'react';
import {View, StyleSheet} from 'react-native';
import {array} from 'prop-types';
import {Text} from 'components';

const Stats = ({stats}) => {
  return (
    <>
      <Text style={styles.title} type="subtitle">
        Estadisticas
      </Text>
      {stats.map((item, index) => (
        <View style={styles.itemContainer} key={index.toString()}>
          <Text type="body">{item.stat.name}</Text>
          <Text type="body">{item.base_stat}</Text>
        </View>
      ))}
    </>
  );
};

Stats.propTypes = {
  stats: array,
};

export default Stats;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
