import * as types from '../actions/types'

const initialState = {}

export default (game = initialState, action) => {
    switch (action.type) {
        case types.GAME_SAVE:
            return action.data
        default:
            return game
    }
}