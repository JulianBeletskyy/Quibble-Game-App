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

export function teamCreate(data) {
    return {
        type: types.TEAM_CREATE,
        method: 'teamCreate',
        callback: 'teamAdd',
        data,
    }
}

export function teamAdd(data) {
    return {
        type: types.TEAM_ADD,
        data,
    }
}