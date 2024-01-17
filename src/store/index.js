import { createStore } from 'vuex'
import common from './modules/common.js'
import slider from './modules/slider.js'
import company from './modules/company.js'
import product from './modules/product.js'

export default createStore({
  modules: {
    common,
    slider,
    company,
    product
  }
})
