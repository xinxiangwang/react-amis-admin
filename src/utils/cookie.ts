import Cookie from 'js-cookie'

export const getTokenCookie = () => {
	return Cookie.get('token')
}

export const setTokenCookie = (val: string) => {
	return Cookie.set('token', val)
}
