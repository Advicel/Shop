import { ADD_TO_BASKET, DELETE_FROM_BASKET, CHANGE_CARD_COUNT } from './types';

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
      return {
        ...state,
        basket: state.basket.filter((x, index) => index !== action.payload),
      };
    case CHANGE_CARD_COUNT:
      const basket = [...state.basket];
      basket[0].count +=action.payload[1];
      return {
        ...state,
        basket
      };

    default:
      return state;
  }
};