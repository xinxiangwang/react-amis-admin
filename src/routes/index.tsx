import { AuthPage } from '@/components/AuthPage'
import Layouts from '@/layouts/layouts'
import Login from '@/pages/login/login'
import NotFound from '@/pages/not-found/not-found'
import { createBrowserRouter, Navigate } from 'react-router-dom'
export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<AuthPage>
				<Layouts />
			</AuthPage>
		),
		children: [
			{
				path: '',
				element: <Navigate to="dashboard" replace />
			},
			{
				path: 'dashboard',
				lazy: async () => {
					const Dashboard = await import('@/pages/dashboard/dashboard')
					return {
						Component: Dashboard.default
					}
				}
			},
			{
				path: 'user',
				lazy: async () => {
					const User = await import('@/pages/user/user')
					return {
						Component: User.default
					}
				}
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '*',
		element: <NotFound />
	}
])
