import { request } from './index'

export const login = (data) => {
    return request('login', data, 'POST')
}

export const register = (data) => {
    return request('register', data, 'POST')
}