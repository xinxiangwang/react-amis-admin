import { useMatches, useNavigate } from 'react-router-dom'
import { Layout, theme, Menu } from 'antd'
import { useState } from 'react';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

function LayoutSidebar() {
	const navigate = useNavigate()
	const matches = useMatches()

	const [collapsed, setCollapsed] = useState(false);
	const items: MenuItem[] = [
		{
			label: 'dashboard',
			key: '/dashboard'
		},
		{
			label: 'dashboard1',
			key: '/dashboard1'
		},
		{
			label: 'dashboard2',
			key: '/dashboard2'
		}
	]

	const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>(matches.map(item => item.pathname))

	const onMenuClick = ({ key }) => {
		navigate(key)
		setDefaultSelectedKeys([...defaultSelectedKeys, key])
	}
	return (
		<Layout.Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
			<div className="demo-logo-vertical" />
			<Menu theme="dark" defaultSelectedKeys={defaultSelectedKeys} mode="inline" items={items} onClick={onMenuClick} />
		</Layout.Sider>
	)
}

export default LayoutSidebar
