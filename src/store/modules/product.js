import state from '@/store/modules/products/state'
import getters from '@/store/modules/products/getters'
import mutations from '@/store/modules/products/mutations'
import actions from '@/store/modules/products/actions'
const product = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}
export default product