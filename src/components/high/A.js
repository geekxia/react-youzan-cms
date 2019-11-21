import React from 'react'

import d from './D'
class A extends React.Component {
  render() {
    return (
      <div>
        <h1>A组件</h1>
      </div>
    )
  }
}
export default d(A)
