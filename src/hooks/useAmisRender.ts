import { service } from '@/utils/request'
import { render, RenderOptions } from 'amis'

type RenderParams = Parameters<typeof render>
type RootRenderProps = RenderParams[2]

export default function useAmisRender() {
	const defaultRenderProps: RenderOptions = {
		theme: 'antd'
	}
	const defaultRootRenderProps: RootRenderProps = {
		enableAMISDebug: true,
		fetcher: (config) => {
			return service(config)
		}
	}
	const renderSchema = (...params: RenderParams) => {
		return render(params[0], Object.assign(defaultRenderProps, params[1] || {}), Object.assign(defaultRootRenderProps!, params[2] || {}))
	}
	return {
		renderSchema
	}
}
