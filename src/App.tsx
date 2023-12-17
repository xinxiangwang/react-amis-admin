import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layouts from './layouts/layouts'
import Dashboard from './pages/dashboard/dashboard'
import Login from './pages/login/login'
import NotFound from './pages/not-found/not-found'
import { useAppStore } from './store'

const AuthPage = observer(({ children }: { children: JSX.Element }) => {
	const appStore = useAppStore()
	if (!appStore.userInfo.token) {
		return <Navigate to="/login" />
	}
	return <>{children}</>
})

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<AuthPage>
						<Layouts />
					</AuthPage>
				}
			>
				<Route path="dashboard" element={<Dashboard />}></Route>
			</Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
	)
}

export default App
