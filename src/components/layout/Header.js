import React from 'react'
import './style.scss'
import { Breadcrumb } from 'antd'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import router from '@/utils/router'

console.log('router', router)

class Header extends React.Component {

  createBreadcrmb() {
    let breadArr = []  // 面包屑JSX对象

    let path = this.props.location.pathname
    let arr = path.split('/').filter(ele=>ele)
    console.log('=======>>>', this.props)

    arr.map((ele, idx)=>{
      let url = '/'+arr.slice(0, idx+1).join('/')
      console.log('===url', url)
      let text = ''
      router.map((ele, idx)=>{
        if (ele.path === url) {
          text = ele.text
        }
      })
      breadArr.push(
        <Breadcrumb.Item key={url}>
          <Link to={url}>{text}</Link>
        </Breadcrumb.Item>
      )
    })
    return breadArr
  }

  render() {
    console.log('--------------------1912', )
    this.createBreadcrmb()
    return (
      <div className='qf_layout_header'>
      <Breadcrumb>
        {
          this.createBreadcrmb()
        }
      </Breadcrumb>
      </div>
    )
  }
}

const HeaderWithRouter = withRouter(Header)
export default HeaderWithRouter
