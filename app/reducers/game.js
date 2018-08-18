import * as types from '../actions/types'

const initialState = {
    team_editing: {
        name: ''
    }
}

export default (game = initialState, action) => {
    switch (action.type) {
        case types.GAME_SAVE:
            return {...action.data, team_editing: {name: ''}}
        case types.TEAM_ADD:
        	return Object.assign({}, game, {
                teams: [...game.teams, action.data],
                team_editing: action.data
            })
        default:
            return game
    }
}