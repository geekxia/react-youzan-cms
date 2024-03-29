import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
import routes from '@/routes'  // 路由配置
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu

export default class Slide extends React.Component {

  render() {
    return (
      <div className='qf_layout_slide'>
        <Menu
          mode="inline"
          theme="dark"
        >
          {
            /* 生成menu */
            routes.map((ele, idx)=>{
              /* 当有二级导航链接时 */
              if (ele.children && ele.children.length > 0) {
                return(
                  <SubMenu
                    key={ele.id}
                    title={
                      <span>
                        <Icon type={ele.icon} />
                        <span>{ele.text}</span>
                      </span>
                    }
                  >
                    {
                      ele.children.map((ele2, idx2) => {
                        return(
                          <Menu.Item key={ele2.id}>
                            <NavLink exact to={ele2.path}>{ele2.text}</NavLink>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {  // 当没有二级导航链接时
                return(
                  <Menu.Item key={ele.id}>
                    <NavLink exact to={ele.path}>
                      <Icon type={ele.icon} />
                      <span>{ele.text}</span>
                    </NavLink>
                  </Menu.Item>
                )
              }
            })
          }
        </Menu>
      </div>
    )
  }
}
