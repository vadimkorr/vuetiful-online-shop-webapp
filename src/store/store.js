import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from './module-cart'
import moduleProds from './module-prods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart: moduleCart,
    prods: moduleProds
  }
})
