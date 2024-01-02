import useAmisRender from '@/hooks/useAmisRender'

function User() {
	const { renderSchema } = useAmisRender()
	return renderSchema({
		type: 'page',
		body: {
			type: 'table',
			tableLayout: 'fixed',
			data: {
				items: [
					{ id: 1, engine: 1 },
					{ id: 2, engine: 2 }
				]
			},
			columns: [
				{
					name: 'id',
					label: 'ID'
				},
				{
					name: 'engine',
					component: (params) => {
						console.log(params)
						return <h1>123</h1>
					},
					label: 'Rendering engine'
				}
			]
		}
	})
}

export default User
