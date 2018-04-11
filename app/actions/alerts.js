import * as types from './types'

export function validate(data) {
    return {
        type: types.ALERTS_VALIDATE,
        data
    }
}

export function validateClear() {
    return {
        type: types.ALERTS_VALIDATE_CLEAR
    }
}

export function errors(data) {
    return {
        type: types.ALERTS_ERRORS,
        data
    }
}

export function errorsClear() {
    return {
        type: types.ALERTS_ERRORS_CLEAR
    }
}

export function message(data) {
    return {
        type: types.ALERTS_MESSAGE,
        data
    }
}

export function messageClear() {
    return {
        type: types.ALERTS_MESSAGE_CLEAR
    }
}