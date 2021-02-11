import { CREATE_FILTER,CREATE_PRICE_FILTER,CREATE_NAME_PATTERN } from './types';
import {  } from './types';

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

export function setNamePattern(value){
  return{
    type: CREATE_NAME_PATTERN,
    payload:value,
  };
}