import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Alert, StyleSheet} from 'react-native';
import PokemonList from './PokemonList';
import {Logo} from 'components';
import {useDispatch} from 'react-redux';
import {getAll, pokemonListUpdate} from 'ducks/app';

const MyPokemonsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    async function fetch() {
      try {
        const response = await dispatch(getAll());
        await dispatch(pokemonListUpdate(response.payload.results));
      } catch (error) {}
    }
    fetch();
  }, []);

  const goPokemon = (pokemon) => {
    navigation.navigate('pokemon', {
      ...pokemon,
      canRemove: true,
    });
  };

  return (
    <View style={styles.container}>
      <Logo />
      <PokemonList {...{goPokemon}} />
    </View>
  );
};

export default MyPokemonsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
