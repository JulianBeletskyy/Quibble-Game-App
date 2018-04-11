import { AsyncStorage } from 'react-native'
import { call, put } from 'redux-saga/effects'
import { API_URL, headers } from './index'
import * as types from '../actions/types'
import actions from '../actions'

export const login = function* (action) {
    try {
        const response = yield call(data => {
            return fetch(API_URL + 'login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: headers(),
            })
        }, action.data)

        const result = yield response.json()

        yield put(actions.loaderHide())

        if (result.validate) {
            yield put({ type: types.ALERTS_VALIDATE, data: result.validate })
        } else if (result.errors) {
            yield put({ type: types.ALERTS_ERRORS, data: result.errors })
        } else {
            if (result.message) {
                const message = {
                    type: result.data ? 'success' : 'error',
                    title: 'Server message',
                    body: result.message,
                }
                yield put({ type: types.ALERTS_MESSAGE, data: message })
            }

            if (result.data) {
                AsyncStorage.setItem('token', result.data)
                yield put({ type: types.AUTH_LOGGED_IN, data: result.data })
            }
        }
    } catch (error) {
        yield put(actions.loaderHide())

        const message = {
            type: 'error',
            title: 'Server message',
            body: error.message,
        }
        yield put({ type: types.ALERTS_MESSAGE, data: message })
    }
}

export const register = function* (action) {
    try {
        const response = yield call(data => {
            return fetch(API_URL + 'register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: headers(),
            })
        }, action.data)

        const result = yield response.json()

        yield put(actions.loaderHide())

        if (result.validate) {
            yield put({ type: types.ALERTS_VALIDATE, data: result.validate })
        } else if (result.errors) {
            yield put({ type: types.ALERTS_ERRORS, data: result.errors })
        } else {
            if (result.message) {
                const message = {
                    type: result.data ? 'success' : 'error',
                    title: 'Server message',
                    body: result.message,
                }
                yield put({ type: types.ALERTS_MESSAGE, data: message })
            }

            if (result.data) {
                AsyncStorage.setItem('token', result.data)
                yield put({ type: types.AUTH_LOGGED_IN, data: result.data })

            }
        }
    } catch (error) {
        yield put(actions.loaderHide())

        const message = {
            type: 'error',
            title: 'Server message',
            body: error.message,
        }
        yield put({ type: types.ALERTS_MESSAGE, data: message })
    }
}