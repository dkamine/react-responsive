import axios from 'axios';
import CryptoJS  from 'crypto-js';
import moment from 'moment';

import {
  LOADING_CHARACTERS,
  ERROR_CHARACTERS,
  FETCH_SUCCESSFULLY_CHARACTERS,
  LOADING_CHARACTER,
  ERROR_CHARACTER,
  FETCH_SUCCESSFULLY_CHARACTER,
} from './constants';
import { marvelApi } from 'config';

const timeStamp = moment().unix();
const queryParams = {
  ts: timeStamp,
  apikey: marvelApi.API_PUBLIC,
  hash: CryptoJS.MD5(timeStamp + marvelApi.API_PRIVATE + marvelApi.API_PUBLIC).toString(CryptoJS.enc.Hex)
};

function loadingCharactersRequest() {
  return { type: LOADING_CHARACTERS };
}

function loadingCharactersError(error) {
  return { error, type: ERROR_CHARACTERS };
}

function loadingCharactersSuccess(data) {
  return dispatch => {
    dispatch({ data, type: FETCH_SUCCESSFULLY_CHARACTERS });
  };
}

function loadingCharacterRequest() {
  return { type: LOADING_CHARACTER };
}

function loadingCharacterError(error) {
  return { error, type: ERROR_CHARACTER };
}

function loadingCharacterSuccess(data) {
  return dispatch => {
    dispatch({ data, type: FETCH_SUCCESSFULLY_CHARACTER });
  };
}

export function getCharacters() {
  const URI = '/v1/public/characters';
  const url = `${marvelApi.BASE_URL}${URI}`;

  return dispatch => {
    dispatch(loadingCharactersRequest());
    axios.get(
      url,
      { params: queryParams }
    )
    .then(response => {
      if (response.status >= 200 && response.status < 300 && response.data) {
        dispatch(loadingCharactersSuccess(response.data.data.results));
      } else if (response.data && response.data.error) {
        dispatch(loadingCharactersError(response.data.error));
      }
    })
    .catch(error => { error && dispatch(loadingCharactersError(error.response.data.error)); });
  };
}

export function getCharacterDetail(id = 0) {
  const URI = '/v1/public/characters';
  const url = `${marvelApi.BASE_URL}${URI}/${id}`;

  return dispatch => {
    if(id && id > 0) {
      dispatch(loadingCharacterRequest());
      axios.get(
        url,
        { params: queryParams }
      )
      .then(response => {
        if (response.status >= 200 && response.status < 300 && response.data) {
          dispatch(loadingCharacterSuccess(response.data.data.results[0]));
        } else if (response.data && response.data.error) {
          dispatch(loadingCharacterError(response.data.error));
        }
      })
      .catch(error => { error && dispatch(loadingCharacterError(error.response.data.error)); });
    } else dispatch(loadingCharacterError("Character id not provided"));
  };
}