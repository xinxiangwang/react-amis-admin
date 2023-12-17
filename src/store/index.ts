import { createContext, useContext } from 'react'
import { UserInfoStore } from './userInfo/userInfo'

class AppStore {
	userInfo = new UserInfoStore()
}

export const appStore = new AppStore()
export const StoreContext = createContext(appStore)

export function useAppStore() {
	const appStore = useContext(StoreContext)
	return appStore
}
