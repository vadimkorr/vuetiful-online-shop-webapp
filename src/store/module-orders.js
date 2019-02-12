export default {
  state: {
    orders: []
  },
  mutations: {
    addOrders (state, orders) {
      state.orders = orders
    }
  },
  actions: { },
  getters: {
    orders: state => {
      return state.orders
    }
  }
}
