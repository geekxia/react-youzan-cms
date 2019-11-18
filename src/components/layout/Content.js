import React from 'react'
import './style.scss'
import { Route, Switch } from 'react-router-dom'
import routes from '@/routes'

export default class Content extends React.Component {

  // 生成Route容器
  createRoute(arr) {
    let routeArr = []
    arr.map((ele, idx) => {
      if (ele.sub && ele.sub.length > 0) {
        ele.sub.map((ele2, idx2)=>{
          routeArr.push(
            <Route key={ele2.id} path={ele2.path} exact component={ele2.component}></Route>
          )
        })
      }
    })
    return routeArr
  }
  render() {
    return (
      <div className='qf_layout_content'>
        <Switch>
        {
          this.createRoute(routes)
        }
        {/*<Redirect from='/*' to='/card'></Redirect>*/}
        </Switch>

      </div>
    )
  }
}
