import { CREATE_FILTER, CREATE_PRICE_FILTER } from './types';

const initialState = {
  category: 'All',
  minPrice: null,
  maxPrice: null,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FILTER:
      return { ...state, category: action.payload };
    case CREATE_PRICE_FILTER:
      return {
        ...state,
        minPrice: action.payload[0],
        maxPrice: action.payload[1],
      };
    default:
      return state;
  }
};