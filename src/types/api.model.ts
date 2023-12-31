export interface IApiResult<T = any> {
	result: number
	status?: number
	msg: string
	data: T
}
