import { AsyncStorage } from 'react-native'
import { takeEvery, call, put } from 'redux-saga/effects'
import * as types from '../actions/types'
import actions from '../actions'
import api from '../api'

const saveToken = function* (action) {
    yield AsyncStorage.setItem('token', action.data)
}

const removeToken = function* (action) {
    yield AsyncStorage.removeItem('token')
}

const sagaAPI = function* (action) {
    if (action.method) {
        try {
            const response = yield call(api[action.method], action.data)
            const result = yield response.json()

            yield put(actions.loaderHide())

            if (result.validate) {
                yield put(actions.validate(result.validate))
            } else if (result.errors) {
                yield put(actions.errors(result.errors))
            } else {
                if (result.message) {
                    const msg = {
                        type: result.data ? 'success' : 'error',
                        title: 'Server message',
                        body: result.message,
                    }
                    yield put(actions.message(msg))
                }

                if (action.callback) {
                    if (result.data) {
                        yield put(actions[action.callback](result.data))
                    }
                }
            }
        } catch (error) {
            yield put(actions.loaderHide())

            const msg = {
                type: 'error',
                title: 'Server message',
                body: error.message,
            }
            yield put(actions.message(msg))
        }
    }
}

const rootSaga = function* () {
    yield takeEvery(types.AUTH_LOGIN, sagaAPI)
    yield takeEvery(types.AUTH_REGISTER, sagaAPI)
    yield takeEvery(types.AUTH_LOGGED_IN, saveToken)
    yield takeEvery(types.AUTH_LOGOUT, removeToken)
    yield takeEvery(types.GAME_CREATE, sagaAPI)
}

export default rootSaga