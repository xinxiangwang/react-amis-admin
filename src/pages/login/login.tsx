import useAmisRender from '@/hooks/useAmisRender'
import React from 'react'

function Login() {
	const { renderSchema } = useAmisRender()
	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="w-[500px] h-[500px]">
				{renderSchema({
					type: 'form',
					wrapWithPanel: false,
					api: '/amis/api/mock2/form/saveForm',
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
								<div>
									<p>这个是个自定义组件</p>
									<p>当前值：{value}</p>
									<a className="btn btn-default" onClick={() => onChange(Math.round(Math.random() * 10000))}>
										随机修改
									</a>
								</div>
							)
						}
					]
				})}
			</div>
		</div>
	)
}

export default Login
