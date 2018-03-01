import {
  LOADING_CHARACTERS,
  ERROR_CHARACTERS,
  FETCH_SUCCESSFULLY_CHARACTERS,
  LOADING_CHARACTER,
  ERROR_CHARACTER,
  FETCH_SUCCESSFULLY_CHARACTER,
} from './constants';

const initialState = {
  characters: [],
  character: {},
  loading: false,
  error: '',
};

export default function character(state = initialState, action) {
  switch (action.type) {
    case LOADING_CHARACTERS:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ERROR_CHARACTERS:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case FETCH_SUCCESSFULLY_CHARACTERS:
      return {
        ...state,
        characters: action.data,
        loading: false
      };
    case LOADING_CHARACTER:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case ERROR_CHARACTER:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case FETCH_SUCCESSFULLY_CHARACTER:
      return {
        ...state,
        character: action.data,
        loading: false
      };
    default: return state;
  }
}