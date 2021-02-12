import { ADD_TO_BASKET, DELETE_FROM_BASKET } from './types';

const initialState = {
  basket: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: state.basket.concat(action.payload),
      };
    case DELETE_FROM_BASKET:
        state.basket.splice(action.payload,1);
    default:
      return state;
  }
};