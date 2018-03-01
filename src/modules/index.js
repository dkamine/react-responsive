import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import character  from './character/reducer';

export default combineReducers({
  routing: routerReducer,
  character,
});