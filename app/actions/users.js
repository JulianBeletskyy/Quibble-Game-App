import * as types from './types'

export function login(data) {
    return {
        type: types.AUTH_LOGIN,
        method: 'login',
        callback: 'loggedIn',
        data,
    }
}

export function loggedIn(data) {
    return {
        type: types.AUTH_LOGGED_IN,
        data,
    }
}

export function logout(data) {
    return {
        type: types.AUTH_LOGOUT,
    }
}

export function register(data) {
    return {
        type: types.AUTH_REGISTER,
        method: 'register',
        callback: 'loggedIn',
        data,
    }
}