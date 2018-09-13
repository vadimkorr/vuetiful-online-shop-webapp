export default {
  state: {
    products: []
  },
  mutations: {
    addToCart (state, product) {
      state.products = [...state.products, product]
    }
  },
  actions: { },
  getters: { }
}