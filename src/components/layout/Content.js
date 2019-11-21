import React from 'react'
import './style.scss'
import { Route, Switch } from 'react-router-dom'
import router from '@/utils/router'

export default class Content extends React.Component {

  // 生成Route容器（第一版）
  // createRoute(arr) {
  //   let routeArr = []
  //   // 爷爷
  //   arr.map((ele, idx) => {
  //     if (ele.path && ele.component) {
  //       routeArr.push(
  //         <Route key={ele.id} path={ele.path} exact component={ele.component}></Route>
  //       )
  //     }
  //     if (ele.sub && ele.sub.length > 0) {
  //       // 爸爸
  //       ele.sub.map((ele2, idx2)=>{
  //         routeArr.push(
  //           <Route key={ele2.id} path={ele2.path} exact component={ele2.component}></Route>
  //         )
  //         if(ele2.children && ele2.children.length > 0) {
  //           // 孙子
  //           ele2.children.map((ele3,idx3) => {
  //             routeArr.push(
  //               <Route key={ele3.id} path={ele3.path} exact component={ele3.component}></Route>
  //             )
  //           })
  //         }
  //       })
  //     }
  //   })
  //   return routeArr
  // }

  // 升级后的路由容器渲染
  createRouteUpdated(arr) {
    let routeArr = []
    arr.map((ele,idx)=>{
      if (ele.path && ele.component) {
        routeArr.push(
          <Route key={ele.id} path={ele.path} exact component={ele.component}></Route>
        )
      }
    })
    return routeArr
  }



  render() {
    return (
      <div className='qf_layout_content'>
        <Switch>
        {
          this.createRouteUpdated(router)
        }
        {/*<Redirect from='/*' to='/card'></Redirect>*/}
        </Switch>

      </div>
    )
  }
}
