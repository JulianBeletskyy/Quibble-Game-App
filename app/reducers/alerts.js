import * as types from '../actions/types'

const initialState = {
    validate: {},
    errors: {},
    message: {},
}

export default (alerts = initialState, action) => {
    switch (action.type) {
        case types.ALERTS_VALIDATE:
            return {
                ...alerts,
                validate: action.data
            }
        case types.ALERTS_VALIDATE_CLEAR:
            return {
                ...alerts,
                validate: {}
            }
        case types.ALERTS_ERRORS:
            return {
                ...alerts,
                errors: action.data
            }
        case types.ALERTS_ERRORS_CLEAR:
            return {
                ...alerts,
                errors: {}
            }
        case types.ALERTS_MESSAGE:
            return {
                ...alerts,
                message: action.data
            }
        case types.ALERTS_MESSAGE_CLEAR:
            return {
                ...alerts,
                message: {}
            }
        default:
            return alerts
    }
}