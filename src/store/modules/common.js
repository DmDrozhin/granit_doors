const common = {
  namespaced: true,
  state: {
    scrw: '', // current screen size
    bpns: { sm: 0, lg: 1440 }, // breakpoints
    isModalOn: false, // on / off modal wind
  },
  getters: {
    scrw: (state) => state.scrw,
    bpns: (state) => state.bpns,
    isModalOn: (state) => state.isModalOn,
  },
  mutations: {
    SET_W: (state, w) => state.scrw = w,
    SET_MDW: (state, bl) => state.isModalOn = bl
  },
  actions: {
    SET_W({ commit }, w) { commit('SET_W', w) },
    SET_MDW({ commit }, bl) { commit('SET_MDW', bl) },
  }
}
export default common