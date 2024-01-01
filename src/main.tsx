import ReactDOM from 'react-dom'
import 'amis/lib/themes/antd.css'
// import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css'
import 'amis/sdk/iconfont.css'
import App from './App'
import './index.scss'
import { appStore, StoreContext } from './store'
import { configure } from 'mobx'

configure({
	/**
	 * 兼容amis mobx版本
	 */
	useProxies: 'never'
})

ReactDOM.render(
	<StoreContext.Provider value={appStore}>
		<App />
	</StoreContext.Provider>,
	document.getElementById('root')
)
