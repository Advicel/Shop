import { CREATE_FILTER } from "./types";

const initialState ={
    filter:"All",
};

export const filterReducer = (state = initialState,action) =>{
    switch(action.type){
        case CREATE_FILTER:
            return {...state, filter: action.payload}
        default: return state;
    }
};