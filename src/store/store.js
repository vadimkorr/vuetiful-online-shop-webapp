import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from './module-cart'
import moduleApp from './module-app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: moduleApp,
    cart: moduleCart
  }
})
