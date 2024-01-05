import useAmisRender from '@/hooks/useAmisRender'

function User() {
	const { renderSchema } = useAmisRender()
	return renderSchema({
		type: 'page',
		body: {
			type: 'crud',
			api: '/userList',
			syncLocation: false,
			columns: [
				{
					name: 'id',
					label: 'ID'
				},
				{
					name: 'name',
					label: 'Name'
				},
				{
					name: 'age',
					label: 'Age'
				},
				{
					name: 'math',
					label: 'Math'
				},
				{
					name: 'english',
					label: 'English'
				},
				{
					name: 'chinnese',
					label: 'Chinese'
				},
				{
					name: 'history',
					label: 'History'
				},
				{
					name: 'computer',
					label: 'Computer'
				},
				{
					type: 'operation',
					label: '操作',
					buttons: [
						{
							label: '详情',
							type: 'button',
							level: 'link',
							actionType: 'dialog',
							dialog: {
								title: '查看详情',
								body: {
									type: 'form',
									body: [
										{
											type: 'input-text',
											name: 'engine',
											label: 'Engine'
										},
										{
											type: 'input-text',
											name: 'browser',
											label: 'Browser'
										},
										{
											type: 'input-text',
											name: 'platform',
											label: 'platform'
										},
										{
											type: 'input-text',
											name: 'version',
											label: 'version'
										},
										{
											type: 'control',
											label: 'grade',
											body: {
												type: 'tag',
												label: '${grade}',
												displayMode: 'normal',
												color: 'active'
											}
										}
									]
								}
							}
						},
						{
							label: '删除',
							type: 'button',
							level: 'link',
							className: 'text-danger ${this.chinnese}',
							disabledOn: 'this.chinnese > 10'
						}
					]
				}
			]
		}
	})
}

export default User
