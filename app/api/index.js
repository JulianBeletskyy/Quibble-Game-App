import store from '../config/store'
import * as users from './users'
import * as game from './game'

export const API_URL = 'http://quibble.da4.info/api/v1/'
export const headers = () => {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    const { users } = store.getState()
    if (users.token) {
        headers['Authorization'] = 'Bearer ' + users.token
    }
    return headers
}

export const request = (uri, data = {}, method = 'GET') => {
    let params = {
        method,
        headers: headers(),
    }

    if (method != 'GET' && method != 'HEAD') {
        params.body = JSON.stringify(data)
    }

    return fetch(API_URL + uri, params)
}

export default {
    ...users,
    ...game,
}