import axios, { AxiosResponse } from 'axios'
import { message } from 'antd'
import { getTokenCookie } from './cookie'
import { IApiResult } from '@/types/api.model'
import type { fetcherResult } from 'amis/lib/types'

/**
 * 将服务器结果转为 amis api结果格式
 */
const apiResultTransfer = (res: AxiosResponse<IApiResult>): fetcherResult => {
	res.data.status = res.data.result
	// @ts-ignore
	return res
}

const service = axios.create()
service.defaults.timeout = 8000
// 请求拦截
service.interceptors.request.use(
	(config) => {
		const token = getTokenCookie()
		token && (config.headers.Authorization = token)
		config.baseURL = import.meta.env.VITE_BASE_API
		return config
	},
	// 发送失败
	(error) => Promise.reject(error)
)
// 响应拦截（可根据具体业务作出相应的调整）
service.interceptors.response.use(
	(response) => {
		apiResultTransfer(response)
		return response
	},
	(error) => {
		// status 是 HTTP 状态码
		const { response } = error
		switch (response.status) {
			case 400:
				error.message = `HTTP CODE ${400}`
				break
			case 401:
				// logout()
				break
			case 403:
				error.message = `HTTP CODE ${403}`
				break
			case 404:
				error.message = `HTTP CODE ${404}`
				break
			case 408:
				error.message = `HTTP CODE ${408}`
				break
			case 500:
				error.message = `HTTP CODE ${500}`
				break
			case 501:
				error.message = `HTTP CODE ${501}`
				break
			case 502:
				error.message = `HTTP CODE ${502}`
				break
			case 503:
				error.message = `HTTP CODE ${503}`
				break
			case 504:
				error.message = `HTTP CODE ${504}`
				break
			case 505:
				error.message = `HTTP CODE ${505}`
				break
			default:
				break
		}
		message.error(error.message)
		return Promise.reject(error)
	}
)

/** 用于网络请求的实例 */
export { service }
