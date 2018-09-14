export default {
  state: {
    products: []
  },
  mutations: {
    addToCart (state, product) {
      state.products = [...state.products, product]
    },
    removeFromCart (state, product) {
      state.products = state.products.filter(p => {
        return p.id !== product.id;
      });
    },
    setCartProductCount (state, payload) {
      let ind = 0;
      let prod = state.products.find((p, index) => {
        ind = index;
        return p.id === payload.product.id
      });
      prod.count = payload.count;
      state.products.splice(ind, 1, prod);
    }
    // decCartProduct (state, product) {
    //   let ind = 0;
    //   let prod = state.products.find((p, index) => {
    //     ind = index;
    //     return p.id === product.id
    //   });
    //   prod.count = (prod.count || 0) > 0 ? (prod.count || 0) - 1 : 0;
    //   state.products.splice(ind, 1, prod);
    // }
  },
  actions: { },
  getters: {
    cartItemsCount: state => {
      return state.products.length;
    }
  }
}