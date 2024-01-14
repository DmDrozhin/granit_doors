const common = {
  namespaced: true,
  state: {
    screen: '', // current screen size
    breaks: { sm: 0, lg: 1440 }, // breakpoints from css layouts
    modal: { idx: '', isOn: false }, // on / off modal wind with idx,
  },
  getters: {
    SCREEN: (state) => state.screen,
    DEVICE: (state) => state.screen >= state.breaks.lg ? 'desktop' : 'mobile',
    BREAKS: (state) => state.breaks,
    MODAL_STATUS: (state) => state.modal,
    REND_ID: () =>  Math.random().toString(16).slice (2)
  },
  mutations: {
    SET_W: (state, w) => state.screen = w,
    SET_MODAL: (state, pl) => state.modal = pl,
  },
  actions: {
    SET_W({ commit }, w) { commit('SET_W', w) },
    SET_MODAL({ commit }, pl) { commit('SET_MODAL', pl) },
  }
}
export default common