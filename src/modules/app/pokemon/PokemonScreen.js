import React, {useEffect} from 'react';
import {ScrollView, View, Image, Alert, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'components';
import Types from './Types';
import Stats from './Stats';
import Sprites from './Sprites';
import Abilities from './Abilities';
import {
  getPokemonById,
  pokemonUpdate,
  getPokemonRegister,
  postRegister,
  getAll,
  pokemonListUpdate,
  deletePokemon,
} from 'ducks/app';
import {useSelector, useDispatch} from 'react-redux';

const PokemonScreen = ({route}) => {
  const pokemon = useSelector(({app: {pokemon}}) => pokemon);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {idPokemon} = route.params;
  const {canRegister} = route.params;
  const {canRemove} = route.params;
  const {objectId} = route.params;

  useEffect(() => {
    async function fetch() {
      try {
        const response = await dispatch(getPokemonById(idPokemon));
        await dispatch(pokemonUpdate(response.payload));
      } catch (error) {}
    }
    fetch();
  }, [idPokemon]);

  const goEvolution = () => {
    navigation.navigate('evolution', {
      idPokemon,
    });
  };

  const register = async () => {
    const res = await dispatch(getPokemonRegister(idPokemon));
    if (res.payload.results.length) {
      Alert.alert('Mensaje', 'Ya tienes registrado este pockemon.');
    } else {
      await dispatch(
        postRegister({
          idPokemon: idPokemon,
          name: pokemon.name,
          image: pokemon.sprites.other['official-artwork'].front_default,
        }),
      );
      const all = await dispatch(getAll());
      await dispatch(pokemonListUpdate(all.payload.results));
      Alert.alert('Mensaje', 'Pokemon registrado.');
    }
  };

  const remove = async () => {
    await dispatch(deletePokemon(objectId));
    const all = await dispatch(getAll());
    await dispatch(pokemonListUpdate(all.payload.results));
    Alert.alert('Mensaje', 'Pokemon eliminado.');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      {pokemon && pokemon.id && (
        <>
          <Text type="title">{pokemon.name}</Text>
          <Image
            style={styles.image}
            source={{
              uri: pokemon.sprites.other['official-artwork'].front_default,
            }}
          />
          <Sprites {...pokemon.sprites} />
          <Types types={pokemon.types} />
          <Abilities abilities={pokemon.abilities} />
          <Stats stats={pokemon.stats} />
          <View style={styles.evolutionContainer}>
            <Button title="Evoluciones" onPress={goEvolution} />
          </View>
          {canRegister && (
            <View style={styles.evolutionContainer}>
              <Button title="Regitrar pokemon" onPress={register} />
            </View>
          )}
          {canRemove && (
            <View style={styles.evolutionContainer}>
              <Button color="#FF0D0D" title="Eliminar" onPress={remove} />
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
  evolutionContainer: {
    marginVertical: 5,
    paddingHorizontal: 20,
  },
});
