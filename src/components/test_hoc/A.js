import React from 'react'

import hocPlace from '../hoc/HocPlace'

class A extends React.Component {
  render() {
    console.log('A props', this.props)
    this.props.onSkip()
    return(
      <div>
        <h2>我是A组件</h2>
      </div>
    )
  }
}

export default hocPlace(A)
