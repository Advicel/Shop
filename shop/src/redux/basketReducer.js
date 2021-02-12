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
      //const newBasket = state.basket.splice()
      const thirdPart = state.basket.splice(action.payload[0]+1,state.basket.length)
      const firstPart = state.basket.splice(0,action.payload[0]);
      const secondPart = action.payload[1];
      // console.log(firstPart.concat(secondPart,thirdPart))
      // console.log("1",firstPart,"2",secondPart,"3",thirdPart);
      return {
        ...state,
        basket: firstPart.concat(secondPart,thirdPart) ,
      };

    default:
      return state;
  }
};