import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {multiClientMiddleware} from 'redux-axios-middleware';
import * as reducers from './ducks';

const rootReducer = combineReducers(reducers);

const axiosMiddleware = multiClientMiddleware(
  {
    default: {
      client: axios.create({
        baseURL: `https://pokeapi.co/api/v2`,
      }),
    },
    back4: {
      client: axios.create({
        baseURL: `https://parseapi.back4app.com/classes`,
        headers: {
          'Content-Type': 'application/json',
          'X-Parse-Application-Id': 'VK5j5Kv4L6qcETkpITvFvw6wcpFfqIbz5i4LzIxi',
          'X-Parse-REST-API-Key': 'Fk2jt88cjOTGzg2vqUITWAyvlzBt5unu73EqSjPb',
        },
      }),
    },
  },
  {
    returnRejectedPromiseOnError: true,
    interceptors: {
      request: [
        {
          success: function ({getState, dispatch, getSourceAction}, req) {
            return {
              ...req,
            };
          },
        },
      ],
      response: [
        {
          success: function (reduxAPI, res) {
            return Promise.resolve(res.data);
          },
          error: function (reduxAPI, err) {
            console.log('mid', err);
            return Promise.reject(err);
          },
        },
      ],
    },
  },
);

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    axiosMiddleware,
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export default store;
