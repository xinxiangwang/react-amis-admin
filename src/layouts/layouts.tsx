import { Outlet } from 'react-router-dom'
import LayoutHeader from './components/header'
import LayoutSidebar from './components/sidebar'

function Layouts() {
	return (
		<div className="w-full h-full flex flex-col">
			<LayoutHeader />
			<div className="flex flex-1">
				<LayoutSidebar />
				<div className="flex-1 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layouts
