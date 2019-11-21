import React from 'react'
import { Redirect } from 'react-router-dom'

function hocLogin(Component) {
  return class HocLogin extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isLogin: false
      }
    }
    render() {
      let { isLogin } = this.state
      return(
        <div>
          {/*使用高阶组件，实现登录拦截*/}
          {
            isLogin ? <Component /> : <Redirect from='/*' to='/login' />
          }
        </div>
      )
    }
  }
}

export default hocLogin
