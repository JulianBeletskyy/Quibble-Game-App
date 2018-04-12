import * as types from '../actions/types'

const initialState = {
    current: true,
    loader: false,
}

export default (screens = initialState, action) => {
    switch (action.type) {
        case types.CURRENT_SCREEN:
            return {
                ...screens,
                current: action.data,
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