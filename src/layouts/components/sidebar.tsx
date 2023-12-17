import useAmisRender from '@/hooks/useAmisRender'

function LayoutSidebar() {
	const { renderSchema } = useAmisRender()
	return (
		<nav className="w-[160px] h-full overflow-y-auto bg-slate-300">
			{renderSchema({
				type: 'nav',
				stacked: true,
				className: 'w-md',
				links: [
					{
						label: 'Dashboard',
						to: '/dashboard',
						icon: 'fa fa-user'
					},
					{
						label: 'Nav 2',
						unfolded: true,
						children: [
							{
								label: 'Nav 2-1',
								children: [
									{
										label: 'Nav 2-1-1',
										to: '/docs/api-2-1-1'
									}
								]
							},
							{
								label: 'Nav 2-2',
								to: '/docs/api-2-2'
							}
						]
					},
					{
						label: 'Nav 3',
						to: '/docs/renderers'
					}
				]
			})}
		</nav>
	)
}

export default LayoutSidebar
