import React from 'react'
import { Button } from 'antd'
import { A, B } from '@/components'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>客户首页</h1>
        <Button type='primary'>按钮</Button>
        <hr/>
        <A></A>
        <hr/>
        <B></B>
      </div>
    )
  }
}
export default Home
