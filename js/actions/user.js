
import type { Action } from './types';

const axios = require('axios');
import {AsyncStorage} from 'react-native'

export const SET_USER = 'SET_USER';
export const CHECK_USER = 'CHECK_USER';

export function setUser(user:string):Action {
  return {
    type: SET_USER,
    payload: user,
  };
}




