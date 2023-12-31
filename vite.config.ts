import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd())
	return defineConfig({
		plugins: [react()],
		resolve: {
			alias: {
				/** @ 符号指向 src 目录 */
				'@': resolve(__dirname, './src')
			}
		},
		server: {
			proxy: {
				[env.VITE_BASE_API]: {
					target: env.VITE_SERVER_URL,
					ws: true,
					/** 是否允许跨域 */
					changeOrigin: true,
					rewrite: (path) => path.replace(new RegExp(`^${env.VITE_BASE_API}`), '')
				}
			}
		}
	})
}
