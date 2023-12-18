import { fetcherResult, render, Schema } from 'amis'

export default function useAmisRender() {
	const renderSchema = (schema: Schema) =>
		render(
			schema,
			{ theme: 'antd' },
			{
				fetcher: (config) => {
					console.log(config)
					return Promise.resolve({})
				}
			}
		)
	return {
		renderSchema
	}
}
