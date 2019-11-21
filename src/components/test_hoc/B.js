import React from 'react'

import hocPlace from '../hoc/HocPlace'

@hocPlace
class B extends React.Component {
  render() {
    console.log('B props', this.props)
    return(
      <div>
        <h2>我是B组件</h2>
      </div>
    )
  }
}

export default B
