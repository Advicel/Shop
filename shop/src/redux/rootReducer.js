import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { movesReducer } from "./movesReducer";

export const rootReducer = combineReducers({
    moves:movesReducer,
    filter:filterReducer,
});
