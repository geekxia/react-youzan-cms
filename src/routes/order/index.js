import React from 'react'
import { inject, observer } from 'mobx-react'

import { Button } from 'antd'

@inject('store') @observer
class Order extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.store.time}</h1>
        <Button type='primary'>点击按钮</Button>
      </div>
    )
  }
}
export default Order
