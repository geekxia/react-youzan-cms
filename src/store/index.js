import CardStore from './card'

class Store {
  constructor() {
    this.CardStore = new CardStore(this)
  }
}

const store = new Store()

export default store
