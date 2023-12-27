import axios from 'axios'
import { message } from 'antd'
import { getTokenCookie } from './cookie'

const service = axios.create()
service.defaults.timeout = 8000
// 请求拦截
service.interceptors.request.use(
	(config) => {
		const token = getTokenCookie()
		token && (config.headers.Authorization = token)
		config.baseURL = import.meta.env.VITE_BASE_API
		console.log(config)
		return config
	},
	// 发送失败
	(error) => Promise.reject(error)
)
// 响应拦截（可根据具体业务作出相应的调整）
service.interceptors.response.use(
	(response) => {
		// ElMessage.error(i18n.global.t('public.service.requestError'))
		// apiData 是 api 返回的数据
		const apiData = response.data
		// 二进制数据则直接返回
		const responseType = response.request?.responseType
		if (responseType === 'blob' || responseType === 'arraybuffer') return apiData
		// 这个 code 是和后端约定的业务 code
		const code = apiData.code
		// 如果没有 code, 代表这不是项目后端开发的 api
		// if (code === undefined) {
		// 	ElMessage.error('非本系统的接口')
		// 	return Promise.reject(new Error('非本系统的接口'))
		// }
		switch (code) {
			case 0:
				// 本系统采用 code === 0 来表示没有业务错误
				return apiData.data
			case 401:
				// Token 过期时
				// return logout()
				break
			default:
				// 不是正确的 code
				message.error(apiData.msg || 'Error')
				return Promise.reject(new Error('Error'))
		}
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
