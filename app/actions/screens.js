import * as types from './types'

export function isHome(value) {
    return {
        type: types.IS_HOME,
        value
    }
}

export function loaderShow() {
    return {
        type: types.LOADER_SHOW,
    }
}

export function loaderHide() {
    return {
        type: types.LOADER_HIDE,
    }
}