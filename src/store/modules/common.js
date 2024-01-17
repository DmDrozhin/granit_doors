const common = {
  namespaced: true,
  state: {
    screen: '', // current screen size
    breaks: { sm: 0, lg: 1440 }, // breakpoints from css layouts
    isModalOpen: false, // on / off modal wind with idx,
    callback: { isOn: false, client: '' },
    orderPop: {
      isOn: false,
      order:{
          id:"1",name:"Дверь Гранит Лира 001",nic:"lira_001",purp:"hm",desc1:"Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam",size:{sm:"2050x860",lg:"2050x960"},side:{L:"Открывание левое",R:"Открывание правое"},lock1:true,lock2:true,d:150,"cont":3,type:"entr",mirr:true,doorType:"Входная",purpose:"Квартирная",
      
        art:{
          desc2:"2) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam",
          col1:"RAL 1387",
          price:13400,
          dfct:"bad",
          sale: 1,
          stock: 9,
          rate:3,
          src1: ["/img/door2.02628ca2.webp"],
          src2: ["/img/lira_001_side2.8b685ba6.webp"],
          art: "a0990",
          id: 1,
          salePrice: 6700,
          saleNum: 0.5
        },
        options:{ size: "2050x860mm", side: "Открывание правое" }
      }
    },
    sendOrder: {}
  },
  getters: {
    SCREEN: (state) => state.screen,
    DEVICE: (state) => state.screen >= state.breaks.lg ? 'desktop' : 'mobile',
    BREAKS: (state) => state.breaks,
    MODAL_STATUS: (state) => state.isModalOpen,
    REND_ID: () =>  Math.random().toString(16).slice (2),
    CALLBACK: (state) => state.callback,
    ORDER_POP: (state) => state.orderPop
  },
  mutations: {
    SET_VIEWPORT: (state, w) => state.screen = w,
    SET_MODAL: (state, pl) => state.isModalOpen = pl,
    SET_CALLBACK_POP: (state, pl) => state.callback = pl,
    SET_ORDER_POP: (state, pl) => state.orderPop = pl,
    SEND_ORDER: (state, pl) => state.sendOrder = pl
  },
  actions: {
    SET_VIEWPORT({ commit }, w) { commit('SET_VIEWPORT', w) },

    SET_MODAL({ commit, dispatch, rootGetters, rootState }, pl) {
      dispatch, rootGetters, rootState
      commit('SET_MODAL', pl)
      if (!pl) {
        commit('product/SET_PREVIEW', { isOn: false, prod: '' }, { root: true })
        commit('SET_CALLBACK_POP', { isOn: false })
        commit('SET_ORDER_POP', { isOn: false })
      }
    },
    SET_CALLBACK_POP({ commit }, pl) {
      commit('SET_CALLBACK_POP', pl)
      if (pl.isOn) commit('SET_MODAL', true)
      else commit('SET_MODAL', false)
    },
    SET_ORDER_POP({ commit }, pl) {
      commit('SET_ORDER_POP', pl)
      if (pl.isOn) commit('SET_MODAL', true)
      else commit('SET_MODAL', false)
    },
    SEND_ORDER({ commit }, pl) {
      commit('SEND_ORDER', pl)
      commit('SET_ORDER_POP', { isOn: false })
      commit('SET_MODAL', false)
    }
  }
}
export default common