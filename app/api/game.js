import { request } from './index'

export const gameCreate = () => {
    return request('game')
}

export const teamCreate = (data) => {
	return request('team', data, 'POST')
}