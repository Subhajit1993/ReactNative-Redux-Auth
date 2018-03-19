import type {Action} from './types';

const axios = require('axios');


export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_INITIATED = 'LOGIN_INITIATED';

const checkLogin = function (email, password) {
    return new Promise((resolve, reject) => {
        axios.post('http://192.168.1.10:3000/login_jwt', {email: email, password: password}).then(function (res) {
            console.log(res.data)
            resolve(res.data)
        });
    })
};

export function loginWithEmailPassword(email: string, password: string): Action {
    return (dispatch, getState) => {
        dispatch({
            type: LOGIN_INITIATED,
            payload: 'login_initiated',
        });
        checkLogin(email, password).then(function (data) {
            dispatch({type: LOGIN_USER, payload: data});
        });
    };
}




