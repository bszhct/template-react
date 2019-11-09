import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'

import stores from './stores'
import * as serviceWorker from './service-worker'
import Root from './views/root'


export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Root />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// 在后台运行的一个线程处理离线缓存, 消息推送, 后台自动更新等任务
// 下次访问时，就可以更快的获取资源
// 离线使用
// 只在生产环境中生效
serviceWorker.unregister()
