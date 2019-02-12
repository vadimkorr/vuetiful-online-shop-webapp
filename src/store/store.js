import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from './module-cart'
import moduleProds from './module-prods'
import moduleOrders from './module-orders'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart: moduleCart,
    prods: moduleProds,
    orders: moduleOrders
  }
})
