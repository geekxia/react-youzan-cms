import React from 'react'

import d from './D'

@d
class B extends React.Component {
  render() {
    return (
      <div>
        <h1>B组件</h1>
      </div>
    )
  }
}
export default B
