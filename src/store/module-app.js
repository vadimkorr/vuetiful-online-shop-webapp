export default {
  state: {
    snack: null
  },
  mutations: {
    openSnack (state, snack) {
      state.snack = { ...snack }
    }
  },
  getters: {
    snack: state => {
      return state.snack
    }
  }
}
