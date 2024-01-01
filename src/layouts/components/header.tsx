import { useAppStore } from '@/store'
import { Button } from 'amis'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Layout, theme } from 'antd'

const LayoutHeader = observer(() => {
	const appStore = useAppStore()
	const onLogout = () => {
		appStore.userInfo.logout()
	}
	const {
    token: { colorBgContainer },
  } = theme.useToken();
	useEffect(() => {
		console.log('LayoutHeader render')
	}, [])
	return (
		<Layout.Header style={{ padding: 0, background: 'pink' }}>
				<span>{appStore.userInfo.token}</span>
				<Button onClick={onLogout}>退出登录</Button>
		</Layout.Header>
	)
})

export default LayoutHeader
