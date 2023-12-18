import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			/** @ 符号指向 src 目录 */
			'@': resolve(__dirname, './src')
		}
	},
	server: {
		proxy: {
			'/apis': {
				target: 'http://rap2api.taobao.org/app/mock/316582',
				ws: true,
				/** 是否允许跨域 */
				changeOrigin: true,
				rewrite: (path) => path.replace(new RegExp('^/apis'), '')
			}
		}
	}
})
