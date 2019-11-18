import React from 'react'

// 路由
import { BrowserRouter } from 'react-router-dom'

// 状态管理
import { Provider } from 'mobx-react'
import store from '@/store'

// UI
import 'antd/dist/antd.css'
import '@/assets/css/common.scss'

import { QfLayout } from '@/components'

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="app">
            <QfLayout></QfLayout>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}
