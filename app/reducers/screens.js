import * as types from '../actions/types'

const initialState = {
    home: true,
    loader: false,
}

export default (screens = initialState, action) => {
    switch (action.type) {
        case types.IS_HOME:
            return {
                ...screens,
                home: action.value,
            }
        case types.LOADER_SHOW:
            return {
                ...screens,
                loader: true,
            }
        case types.LOADER_HIDE:
            return {
                ...screens,
                loader: false,
            }
        default:
            return screens
    }
}