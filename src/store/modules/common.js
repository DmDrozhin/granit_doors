const common = {
  namespaced: true,
  state: {
    scrw: '',
    bpns: { sm: 0, lg: 1440 }
  },
  getters: {
    scrw: (state) => state.scrw,
    bpns: (state) => state.bpns,
  },
  mutations: {
    SET_W: (state, w) => state.scrw = w
  },
  actions: {
    SET_W({ commit }, w) { commit('SET_W', w) }
  }
}
export default common