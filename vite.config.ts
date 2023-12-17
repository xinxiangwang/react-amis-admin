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
	}
})
