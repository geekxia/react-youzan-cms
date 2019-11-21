import React from 'react'

// 路由
import { HashRouter, Route } from 'react-router-dom'

// 状态管理
import { Provider } from 'mobx-react'
import store from '@/store'

// UI
import 'antd/dist/antd.css'
import '@/assets/css/common.scss'

import { QfLayout } from '@/components'
import Login from '@/routes/login/Login'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }

  render() {
    let { isLogin } = this.state
    return (
      <HashRouter>
        <Provider store={store}>
          <div className="app">
            {/*
              isLogin ? <QfLayout></QfLayout> : <Login></Login>
            */}
            <QfLayout />
            <Route exact path='/login' component={Login} />
          </div>
        </Provider>
      </HashRouter>
    )
  }
}
