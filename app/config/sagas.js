import { takeEvery, call, put } from 'redux-saga/effects'
import * as types from '../actions/types'
import api from '../api'

const rootSaga = function* () {
    yield takeEvery(types.AUTH_LOGIN, api.login)
    yield takeEvery(types.AUTH_REGISTER, api.register)
}

export default rootSaga