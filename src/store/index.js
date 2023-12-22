import { createStore } from 'vuex'
import common from './modules/common.js'
import slider from './modules/slider.js'

export default createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    common,
    slider
  }
})
