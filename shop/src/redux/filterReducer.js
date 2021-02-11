import { CREATE_FILTER, CREATE_NAME_PATTERN, CREATE_PRICE_FILTER } from './types';

const initialState = {
  category: 'All',
  minPrice: null,
  maxPrice: null,
  namePattern:"",
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
    case CREATE_NAME_PATTERN:
      return{
        ...state,
        namePattern:action.payload,
      }
    default:
      return state;
  }
};