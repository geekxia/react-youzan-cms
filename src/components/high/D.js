import React from 'react'

function d(Component) {
  return class D extends React.Component {
    render() {
      return(
        <div>
          <h1>公共区域</h1>
          <Component></Component>
        </div>
      )


    }
  }
}

export default d
