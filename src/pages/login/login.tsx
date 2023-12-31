import useAmisRender from '@/hooks/useAmisRender'
import { useAppStore } from '@/store'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
	const { renderSchema } = useAmisRender()
	const appStore = useAppStore()
	const navigate = useNavigate()

	if (appStore.userInfo.isLogin) {
		return <Navigate to="/" />
	}
	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="w-[500px] h-[500px]">
				{renderSchema({
					type: 'form',
					wrapWithPanel: false,
					api: '/login',
					className: 'flex flex-col',
					body: [
						{
							type: 'input-text',
							name: 'name',
							label: '用户名'
						},
						{
							type: 'input-password',
							name: 'password',
							label: '密码'
						},
						{
							type: 'wrapper',
							size: 'none',
							className: 'flex',
							body: [
								{
									type: 'input-text',
									name: 'code',
									asFormItem: true,
									className: 'flex-1 mr-[10px]',
									label: '验证码'
								},
								{
									asFormItem: true,
									label: ' ',
									children: ({ value, onChange }) => (
										<div className="w-[100px] bg-[pink] h-[32px]"></div>
									)
								},
							]
						},
						{
							type: 'submit',
							label: '登录',
							actionType: 'submit',
							level: 'primary'
						}
					],
					onEvent: {
						submitSucc: {
							actions: [
								{
									actionType: 'custom',
									script: function (context, doAction, event) {
										console.log(event.data.result.data.token)
										appStore.userInfo.setToken(event.data.result.data.token)
										navigate('/')
									},
								},
							],
						},
					},
				})}
			</div>
		</div>
	)
}

export default Login
