import React, {useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import EvolutionList from './EvolutionList';
import {getSpecies, evolutionListUpdate, getEvolutions} from 'ducks/app';
import {useSelector, useDispatch} from 'react-redux';

const EvolutionScreen = ({route}) => {
  const list = useSelector(({app: {evolutionList}}) => evolutionList);
  const dispatch = useDispatch();
  const {idPokemon} = route.params;

  useEffect(() => {
    async function fetch() {
      try {
        const res = await dispatch(getSpecies(idPokemon));
        const idEvolution = res.payload.evolution_chain.url.split('/')[6];
        const resp = await dispatch(getEvolutions(idEvolution));
        if (
          resp.payload.chain &&
          resp.payload.chain.evolves_to &&
          resp.payload.chain.evolves_to.length
        ) {
          const nextList = [
            resp.payload.chain.species,
            resp.payload.chain.evolves_to[0].species,
          ];
          if (
            resp.payload.chain.evolves_to[0].evolves_to &&
            resp.payload.chain.evolves_to[0].evolves_to.length
          ) {
            nextList.push(
              resp.payload.chain.evolves_to[0].evolves_to[0].species,
            );
          }

          let evolutionList = [];
          for (const item of nextList) {
            evolutionList.push({
              name: item.name,
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                item.url.split('/')[6]
              }.png`,
            });
          }
          await dispatch(evolutionListUpdate(evolutionList));
        } else {
          await dispatch(evolutionListUpdate([]));
          Alert.alert('Mensaje', 'No evoluciona');
        }
      } catch (error) {
        console.log('error', error);
      }
    }
    fetch();
  }, [idPokemon]);

  return (
    <View style={styles.container}>
      <EvolutionList {...{list}} />
    </View>
  );
};

export default EvolutionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
