import useAmisRender from '@/hooks/useAmisRender'
import React from 'react'

function Login() {
	const { renderSchema } = useAmisRender()
	return (
		<div className="w-full h-full">
			<h1>Lgin</h1>
			{renderSchema({
				type: 'form',
				wrapWithPanel: false,
				api: '/amis/api/mock2/form/saveForm',
				body: [
					{
						type: 'input-text',
						name: 'name',
						label: '姓名：'
					}
				]
			})}
		</div>
	)
}

export default Login
