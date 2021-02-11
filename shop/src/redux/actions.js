import { CREATE_FILTER } from './types';
import { CREATE_PRICE_FILTER } from './types';

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