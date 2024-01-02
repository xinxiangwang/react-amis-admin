import { useAppStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { Avatar, Dropdown, Layout } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
const LayoutHeader = observer(() => {
	const appStore = useAppStore()
	const items: MenuProps['items'] = [
		{
			key: '1',
			label: '退出登录',
			onClick: () => {
				appStore.userInfo.logout()
			}
		}
	]
	return (
		<Layout.Header className="flex items-center justify-end" style={{ padding: 0, background: 'white' }}>
			<Dropdown trigger={['click']} menu={{ items }}>
				<Avatar className="mr-[50px] cursor-pointer" icon={<UserOutlined />} />
			</Dropdown>
		</Layout.Header>
	)
})

export default LayoutHeader
