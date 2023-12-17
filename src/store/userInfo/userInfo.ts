import { makeAutoObservable, configure } from 'mobx'
import { IUserInfoStore } from './userInfo.model'
configure({
	isolateGlobalState: true
})
export class UserInfoStore implements IUserInfoStore {
	token: string = '123123123'

	logout() {
		this.token = ''
	}
	constructor() {
		console.log('1231231')
		makeAutoObservable(this)
	}
}
