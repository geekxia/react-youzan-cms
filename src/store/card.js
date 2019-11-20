import { observable, action } from 'mobx'
import { getCardList } from '@/utils/api'

class CardStore {

  @observable list = []   // 所有数据放在这里
  @observable list1 = []  // 用于各种增删改查的逻辑
  @observable list2 = []  // 用于页面显示
  @observable list3 = []  // 用于缓存新增的权益卡

  @action getCardList() {
    getCardList({page: 1, size: 2}, res=>{
      console.log('卡', res)
      this.list = [...this.list3, ...res]
      this.list1 = [...this.list3, ...res]
      // 初始化
      this.updateList2(1)
    })
  }
  // 分页，对数组进行切割
  @action updateList2(page) {
    this.list2 = this.list1.slice((page-1)*2, page*2)
  }

  // 分页查询
  @action getCardListOfPage(payload) {
    const page = payload
    this.updateList2(page)
  }
  // 根据状态筛选
  @action getCardListOfStatus(payload) {
    const status = payload  // 它的数据类型是 字符串
    const res = this.list.filter(ele=>{
      return ele.status === status
    })
    this.list1 = res
    this.updateList2(1)
  }
  // 根据关键字进行搜索
  @action getCardListOfSearch(payload) {
    const searchText = payload.trim()
    let res = this.list.filter(ele=>{
      return ele.name.indexOf(searchText) !== -1
    })
    this.list1 = res
    this.updateList2(1)
  }

  @action add(payload) {
    const card = payload
    card.id = Date.now()
    card.status = 1
    console.log('store card', card)
    this.list3.unshift(card)
  }
}

export default CardStore
