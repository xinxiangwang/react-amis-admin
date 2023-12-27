import useAmisRender from '@/hooks/useAmisRender'

function Login() {
	const { renderSchema } = useAmisRender()
	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="w-[500px] h-[500px]">
				{renderSchema({
					type: 'form',
					wrapWithPanel: false,
					api: '/login',
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
							name: 'code',
							asFormItem: true,
							children: ({ value, onChange }) => (
								<div className="flex">
									<div className="flex-1">
										{renderSchema({
											type: 'input-text',
											label: '验证码'
										})}
									</div>
									<div className="w-[100px]"></div>
								</div>
							)
						},
						{
							type: 'submit',
							label: '登录'
						}
					]
				})}
			</div>
		</div>
	)
}

export default Login
