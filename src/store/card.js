import { observable, action } from 'mobx'
import { getCardList } from '@/utils/api'

class CardStore {
  @observable list = []
  @observable list2 = []

  @observable pageList = []
  @action getCardList() {
    getCardList({}, res=>{
      console.log('权限卡列表', res)
      this.list = res
      this.list2 = res
      this.getCardListOfPage(1, 2)
    })
  }


  @action getCardListOfPage(page) {
    console.log('this', this)
    // console.log(page, size, this.list)
    this.pageList = this.list2.slice((page-1)*2, page*2)
  }
  @action getCardListOfStatus(status) {
    let res = this.list.filter(ele=>{
      return ele.status==status
    })
    this.list2 = res
    console.log(status, res)
    this.getCardListOfPage(1, 2)
  }
  @action getCardListOfSearch(str) {
    let res = this.list.filter(ele=>{
      return ele.name.indexOf(str.trim()) !== -1
    })
    this.list2 = res
    console.log('store search', str, res)
    this.getCardListOfPage(1, 2)
  }
}

export default CardStore
