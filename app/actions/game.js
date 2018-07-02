import * as types from './types'

export function gameCreate() {
    return {
        type: types.GAME_CREATE,
        method: 'gameCreate',
        callback: 'gameSave',
    }
}

export function gameSave(data) {
    return {
        type: types.GAME_SAVE,
        data,
    }
}