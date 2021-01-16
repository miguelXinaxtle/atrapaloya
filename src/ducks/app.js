import {createAction, createReducer} from '@reduxjs/toolkit';

// POKEMON API
const GET_POKEMON_ID = 'GET_POKEMON_ID';
const GET_SPECIES = 'GET_SPECIES';
const GET_EVOLUTIONS = 'GET_EVOLUTIONS';
const POKEMON_UPDATE = 'POKEMON_UPDATE';
const EVOLUTION_LIST_UPDATE = 'EVOLUTION_LIST_UPDATE';

// BACK4 API
const GET_ALL = 'GET_ALL';
const GET_POKEMON_REGISTER = 'GET_POKEMON_REGISTER';
const POST_POKEMON = 'POST_POKEMON';
const DELETE_POKEMON = 'DELETE_POKEMON';
const POKEMON_LIST_UPDATE = 'POKEMON_LIST_UPDATE';

export const getPokemonById = createAction(GET_POKEMON_ID, (idPokemon) => ({
  payload: {
    client: 'default',
    request: {
      url: `/pokemon/${idPokemon}`,
      method: 'GET',
    },
  },
}));

export const getSpecies = createAction(GET_SPECIES, (idPokemon) => ({
  payload: {
    client: 'default',
    request: {
      url: `/pokemon-species/${idPokemon}/`,
      method: 'GET',
    },
  },
}));

export const getEvolutions = createAction(GET_EVOLUTIONS, (idEvolution) => ({
  payload: {
    client: 'default',
    request: {
      url: `/evolution-chain/${idEvolution}/`,
      method: 'GET',
    },
  },
}));

export const pokemonUpdate = createAction(POKEMON_UPDATE);
export const evolutionListUpdate = createAction(EVOLUTION_LIST_UPDATE);

export const getAll = createAction(GET_ALL, () => ({
  payload: {
    client: 'back4',
    request: {
      url: `/pokemon`,
      method: 'GET',
    },
  },
}));

export const getPokemonRegister = createAction(
  GET_POKEMON_REGISTER,
  (idPokemon) => ({
    payload: {
      client: 'back4',
      request: {
        url: `/pokemon?where={"idPokemon":${idPokemon}}`,
        method: 'GET',
      },
    },
  }),
);

export const postRegister = createAction(POST_POKEMON, (pokemon) => ({
  payload: {
    client: 'back4',
    request: {
      url: `/pokemon`,
      method: 'POST',
      data: pokemon,
    },
  },
}));

export const deletePokemon = createAction(DELETE_POKEMON, (objectId) => ({
  payload: {
    client: 'back4',
    request: {
      url: `/pokemon/${objectId}`,
      method: 'DELETE',
    },
  },
}));

export const pokemonListUpdate = createAction(POKEMON_LIST_UPDATE);

const initState = {
  pokemonList: [],
  pokemon: {},
  evolutionList: [],
};

const reducer = createReducer(initState, {
  [POKEMON_UPDATE](state, action) {
    return {...state, pokemon: action.payload};
  },
  [EVOLUTION_LIST_UPDATE](state, action) {
    return {...state, evolutionList: action.payload};
  },
  [POKEMON_LIST_UPDATE](state, action) {
    return {...state, pokemonList: action.payload};
  },
});
export default reducer;
