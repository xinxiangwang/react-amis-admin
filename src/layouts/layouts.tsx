import { Layout, theme } from 'antd'
import LayoutHeader from './components/header'
import LayoutSidebar from './components/sidebar'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

function Layouts() {
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken()
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<LayoutSidebar />
			<Layout className="flex flex-col">
				<LayoutHeader />
				<Content className="flex-1 p-[12px] overflow-hidden">
					{/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
					<div
						className="h-full p-[12px]"
						style={{
							background: colorBgContainer,
							borderRadius: borderRadiusLG
						}}
					>
						<Outlet />
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}

export default Layouts
