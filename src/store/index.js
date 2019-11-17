import { observable, action } from 'mobx'

class Store {
  @observable time = '2019'
  @action updateTime() {
    this.time = '2020'
  }
}

export default new Store()
