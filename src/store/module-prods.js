export default {
  state: {
    products: [],
    page: 1
  },
  mutations: {
    addProds (state, products) {
      state.products = [...products]
    }
  },
  actions: { },
  getters: {
    products: state => {
      return state.products
    }
  }
}
