import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {
  AppState as AppState,
  SuperheroSuccessPayload as AppSuccessPayload,
  SearchSuperheroPayload as SearchAppPayload,
} from './types';

// =========== Create State ===========
const INITIAL_STATE = Immutable<AppState>({
  data: [],
  fetching: false,
  textSearch: '',
});

// =========== Create Action ===========
export interface AppActionTypes {
  GET_SUPERHEROES: 'GET_SUPERHEROES';
  GET_SUPERHEROES_SUCCESS: 'GET_SUPERHEROES_SUCCESS';
  GET_SUPERHEROES_FAILURE: 'GET_SUPERHEROES_FAILURE';
  SEARCH_SUPERHERO: 'SEARCH_SUPERHERO';
}

const {Types, Creators} = createActions({
  getSuperheroes: [],
  getSuperheroesSuccess: ['data'],
  getSuperheroesFailure: [],
  searchSuperhero: ['text'],
});

export const AppTypes = Types;
export default Creators;

const getSuperheroes = (state: AppState) => {
  return {
    ...state,
    fetching: true,
  };
};

const getSuperheroesSuccess = (state: AppState, {data}: AppSuccessPayload) => {
  return {
    ...state,
    data,
    fetching: false,
  };
};

const getSuperheroesFailure = (state: AppState) => {
  return {
    ...state,
    fetching: false,
  };
};

const searchSuperhero = (state: AppState, {text}: SearchAppPayload) => {
  return {
    ...state,
    textSearch: text,
  };
};

// =========== Create Reducer ===========
export const reducer = createReducer<any>(INITIAL_STATE, {
  [Types.GET_SUPERHEROES]: getSuperheroes,
  [Types.GET_SUPERHEROES_SUCCESS]: getSuperheroesSuccess,
  [Types.GET_SUPERHEROES_FAILURE]: getSuperheroesFailure,
  [Types.SEARCH_SUPERHERO]: searchSuperhero,
});
