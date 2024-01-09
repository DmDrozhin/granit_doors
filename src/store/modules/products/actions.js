export default {
  SET_CURR_SLIDE({ commit }, pl) {
    commit('SET_CURR_SLIDE', pl)
    commit('SET_CURR_ART_DATA', pl)
  },
  SET_RPOD_FILTER({ commit }, pl) {
    commit('SET_PROD_FILTER', pl)
  },
  SET_PROD_SORTER({ commit }, pl) {
    commit('SET_PROD_SORTER', pl)
  }
}