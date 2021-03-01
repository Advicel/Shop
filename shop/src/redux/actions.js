import {
  CREATE_FILTER,
  CREATE_PRICE_FILTER,
  CREATE_NAME_PATTERN,
  ADD_TO_BASKET,
  DELETE_FROM_BASKET,
  CHANGE_CARD_COUNT,
} from './types';
export const filterActions = {
  setNamePattern: (payload) => ({ type: CREATE_NAME_PATTERN, payload }),
  currentFilter: (payload) => ({ type: CREATE_FILTER, payload }),
  setPriceFilter: (payload) => ({ type: CREATE_PRICE_FILTER, payload }),
};
export const basketActions = {
  addToBasket: (payload) => ({ type: ADD_TO_BASKET, payload }),
  deleteFromBasket: (payload) => ({ type: DELETE_FROM_BASKET, payload }),
  changeCardCount: (payload) => ({ type: CHANGE_CARD_COUNT, payload }),
};