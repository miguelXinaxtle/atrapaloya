import React from 'react';
import {FlatList} from 'react-native';
import {array} from 'prop-types';
import {ListEmpty, Separator} from 'components';
import EvolutionItem from './EvolutionItem';

const EvolutionList = ({list}) => {
  const keyExtractor = (item, index) => index.toString();
  const renderEmpty = () => <ListEmpty text="No hay elementos." />;
  const itemSeparator = () => <Separator />;
  const renderItem = ({item}) => <EvolutionItem {...item} />;

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={list}
      ItemSeparatorComponent={itemSeparator}
      ListEmptyComponent={renderEmpty}
      renderItem={renderItem}
    />
  );
};

EvolutionList.propTypes = {
  list: array,
};

export default EvolutionList;
