import { RouterProvider } from 'react-router-dom'
import PageSpin from './components/PageSpin'
import { router } from './routes'

const App = () => {
	return <RouterProvider router={router} fallbackElement={<PageSpin />} />
}

export default App
