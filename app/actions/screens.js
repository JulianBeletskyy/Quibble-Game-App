import * as types from './types'

export function currentScreen(data) {
    return {
        type: types.CURRENT_SCREEN,
        data
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