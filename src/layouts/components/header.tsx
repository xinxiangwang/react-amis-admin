import { useAppStore } from '@/store'
import { Button } from 'amis'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const LayoutHeader = observer(() => {
	const appStore = useAppStore()
	const onLogout = () => {
		appStore.userInfo.logout()
	}
	useEffect(() => {
		console.log('LayoutHeader render')
	}, [])
	return (
		<header className="h-[80px] bg-[pink] flex justify-between">
			<span>{appStore.userInfo.token}</span>
			<Button onClick={onLogout}>退出登录</Button>
		</header>
	)
})

export default LayoutHeader
