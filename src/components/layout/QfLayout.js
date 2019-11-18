import React from 'react'
import './style.scss'
import Slide from './Slide'   // 左侧导航容器
import Header from './Header'  // 头部容器
import Content from './Content'  // 内容区域

export default class QfLayout extends React.Component {
  render() {
    return (
      <div className='qf_layout'>
        <div className='aside'>
          <Slide></Slide>
        </div>
        <div className='header'>
          <Header></Header>
        </div>
        <div className='content'>
          <div className='content_wrap'>
            <Content></Content>
          </div>
        </div>
      </div>
    )
  }
}
