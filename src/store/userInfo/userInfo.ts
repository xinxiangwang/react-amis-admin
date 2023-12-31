import { getTokenCookie, setTokenCookie } from '@/utils/cookie'
import { makeAutoObservable, configure } from 'mobx'
import { IUserInfoStore } from './userInfo.model'
configure({
	isolateGlobalState: true
})
export class UserInfoStore implements IUserInfoStore {
	token = getTokenCookie()

	get isLogin() {
		return !!this.token
	}

	setToken(token: string) {
		this.token = token
		setTokenCookie(this.token)
	}

	logout() {
		this.token = ''
		setTokenCookie(this.token)
	}
	constructor() {
		makeAutoObservable(this)
	}
}
