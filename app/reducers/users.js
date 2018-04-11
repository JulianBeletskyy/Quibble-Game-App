import * as types from '../actions/types'

const initialState = {
    token: null,
}

export default (users = initialState, action) => {
    switch (action.type) {
        case types.AUTH_LOGGED_IN:
            return {
                ...users,
                token: action.data,
            }
        case types.AUTH_LOGOUT:
            return {
                ...users,
                token: null,
            }
        default:
            return users
    }
}