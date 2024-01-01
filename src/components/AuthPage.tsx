import { useAppStore } from "@/store"
import { observer } from "mobx-react-lite"
import { Navigate } from "react-router-dom"

export const AuthPage = observer(({ children }: { children: JSX.Element }) => {
	const appStore = useAppStore()
	if (!appStore.userInfo.isLogin) {
		return <Navigate to="/login" />
	}
	return <>{children}</>
})
