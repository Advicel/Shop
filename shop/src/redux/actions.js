import { CREATE_MOVE ,CREATE_FILTER} from './types';

export function createMove(move) {
  return {
    type: CREATE_MOVE,
    payload: move,
  };
}
export function currentFilter(value) {
  return {
    type: CREATE_FILTER,
    payload: value,
  };
}