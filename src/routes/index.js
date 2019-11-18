import Home from './home/Home'
import Card from './card/Card'

const routes = [
  {
    id: 1,
    path: null,
    text: '客户管理',
    component: null,
    icon: 'apple',
    sub: [
      {
        id: 101,
        path: '/home',
        text: '客户首页',
        component: Home
      },
      {
        id: 102,
        path: '/card',
        text: '权益卡',
        component: Card
      }
    ]
  },
  {
    id: 2,
    path: null,
    text: '商品管理',
    component: null,
    icon: 'ie'
  },
  {
    id: 3,
    path: null,
    text: '订单管理',
    component: null,
    icon: 'windows'
  }
]

export default routes