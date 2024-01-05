const common = {
  namespaced: true,
  state: {
    screen: '', // current screen size
    breaks: { sm: 0, lg: 1440 }, // breakpoints
    isModalOn: false, // on / off modal wind,
    isPreviewOn: false, // of / off doors preview slider
  },
  getters: {
    SCREEN: (state) => state.screen,
    BREAKS: (state) => state.breaks,
    IS_MODAL_ON: (state) => state.isModalOn,
  },
  mutations: {
    SET_W: (state, w) => state.screen = w,
    SET_MODAL: (state, bl) => state.isModalOn = bl,
    OPEN_PREVIEW: (state) => { 
      state.isPreviewOn = true
      state.isModalOn = true
    }
  },
  actions: {
    SET_W({ commit }, w) { commit('SET_W', w) },
    SET_MODAL({ commit }, bl) { commit('SET_MODAL', bl) },
    OPEN_PREVIEW({ commit }) { commit('OPEN_PREVIEW') }
  }
}
export default common