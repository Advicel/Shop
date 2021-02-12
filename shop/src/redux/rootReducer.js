import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { basketReducer } from './basketReducer';

export const rootReducer = combineReducers({
  filter: filterReducer,
  basket: basketReducer,
});
