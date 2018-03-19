
import type { Action } from '../actions/types';
import {SET_USER, CHECK_USER} from '../actions/user';

export type State = {
    name: string
}

const initialState = {
  name: '',
    user: '',
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_USER) {
    return {
      ...state,
      name: action.payload,
    };
  }
    if (action.type === CHECK_USER) {
        return {
            ...state,
            user: action.payload,
        };
    }
  return state;
}
