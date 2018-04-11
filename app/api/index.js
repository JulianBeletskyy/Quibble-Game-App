import * as users from './users'

export const API_URL = 'http://quibble.da4.info/api/v1/'
export const headers = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

export default {
    ...users,
}