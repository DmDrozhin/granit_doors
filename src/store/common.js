const common = {
  namespaced: true,
  state: {
    scrw: ''
  },
  getters: {
    scrw: (state) => state.scrw
  },
  mutations: {
    SET_W: (state, w) => state.scrw = w
  },
  actions: {
    SET_W({ commit }, w) { commit('SET_W', w) }
  }
}
export default common