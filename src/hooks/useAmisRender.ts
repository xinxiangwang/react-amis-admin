import { render, Schema } from 'amis'

export default function useAmisRender() {
	return {
		renderSchema: (schema: Schema) => render(schema, { theme: 'antd' })
	}
}
