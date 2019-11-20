import Home from './home/Home'
import Card from './card/Card'
import CardCreate from './card_create/CardCreate'

const routes = [
  {
    id: 1,
    path: '/',
    text: '概况',
    component: Home,
    icon: 'ie'
  },
  {
    id: 2,
    path: null,
    text: '客户管理',
    component: null,
    icon: 'apple',
    children: [
      {
        id: 201,
        path: '/card',
        text: '权益卡',
        component: Card,
        children: [
          {
            id: 20101,
            path: '/card/create',
            text: '新建权益卡',
            component: CardCreate
          }
        ]
      }
    ]
  },

]

export default routes
