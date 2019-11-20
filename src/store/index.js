import CardStore from './card'

class Store {
  constructor() {
    this.CardStore = new CardStore()
  }
}

const store = new Store()
export default store
