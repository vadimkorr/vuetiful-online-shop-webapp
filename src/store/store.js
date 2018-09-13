import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from './module-cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart: moduleCart
  }
})