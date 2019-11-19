import React from 'react'
import { inject, observer } from 'mobx-react'

import { Button } from 'antd'

@inject('store') @observer
class Home extends React.Component {
  componentDidMount() {
    // this.props.store.updateMsg()
  }
  render() {
    return (
      <div>
        <h1>客户首页</h1>
        <Button type='primary'>按钮</Button>
      </div>
    )
  }
}
export default Home
