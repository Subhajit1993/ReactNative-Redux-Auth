import type {Action} from '../actions/types';
import {LOGIN_USER, LOGIN_INITIATED} from "../actions/auth";

export type State = {
    jwt_token: string
}

const initialState = {
    jwt_token: null,
};

export default function (state: State = initialState, action: Action): State {
    if (action.type === LOGIN_USER) {
        return {
            ...state,
            jwt_token: action.payload,
        };
    }
    if (action.type === LOGIN_INITIATED) {
        return {
            ...state,
            jwt_token: action.payload,
        };
    }
    return state;
}
