import {
  CREATE_FILTER,
  CREATE_PRICE_FILTER,
  CREATE_NAME_PATTERN,
  ADD_TO_BASKET,
  DELETE_FROM_BASKET,
  CHANGE_CARD_COUNT,

} from './types';

export function currentFilter(value) {
  return {
    type: CREATE_FILTER,
    payload: value,
  };
}
export function setPriceFilter(value) {
  return {
    type: CREATE_PRICE_FILTER,
    payload: value,
  };
}

export function setNamePattern(value) {
  return {
    type: CREATE_NAME_PATTERN,
    payload: value,
  };
}
export function addToBasket(value) {
  return {
    type: ADD_TO_BASKET,
    payload: value,
  };
}
export function deleteFromBasket(value){
  return{
    type:DELETE_FROM_BASKET,
    payload: value,
  };
}

export function changeCardCount(value){
  return{
    type:CHANGE_CARD_COUNT,
    payload: value,
  };
}