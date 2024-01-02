import { useMatches, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import type { MenuProps } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

function LayoutSidebar() {
	console.log('side bar render')
	const navigate = useNavigate()
	const matches = useMatches()

	const [collapsed, setCollapsed] = useState(false)
	const items: MenuItem[] = [
		{
			label: 'dashboard',
			key: '/dashboard'
		},
		{
			label: 'user',
			key: '/user'
		},
		{
			label: 'dashboard2',
			key: '/dashboard2'
		}
	]
	const onMenuClick = ({ key }) => {
		navigate(key)
	}
	return (
		<Layout.Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
			<div className="demo-logo-vertical" />
			<Menu theme="dark" selectedKeys={matches.map((item) => item.pathname)} mode="inline" items={items} onClick={onMenuClick} />
		</Layout.Sider>
	)
}

export default LayoutSidebar
