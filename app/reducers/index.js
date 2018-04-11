import { combineReducers } from 'redux'
import alerts from './alerts'
import screens from './screens'
import users from './users'

export default combineReducers({
    alerts,
    screens,
    users,
})