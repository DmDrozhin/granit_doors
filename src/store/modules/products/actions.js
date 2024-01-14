import data from '@/incoming_data/incoming-data.js'
import setts from '@/incoming_data/incoming-prod-setts.js'

export default {
  SAVE_INCOMING_DATA({ commit }) {
    const nData =  data.map(it => {
      const nArts = []
      let id = 0
      for(const art in it.arts) {
        const door = it.arts[art]
        const sale = setts.sale[door.sale]
        door.art = art
        door.id = id++
        door.salePrice = door.price * (1 - sale)
        door.saleNum = sale
        nArts.push(door)
      }
      it.arts = nArts
      return it
    })
    const pl = { data: nData, setts: setts }
    commit('SAVE_INCOMING_DATA', pl)
  },

  SET_CURR_SLIDE({ commit }, pl) {
    commit('SET_CURR_SLIDE', pl)
  },
  SET_PROD_FILTER({ commit }, pl) {
    commit('SET_PROD_FILTER', pl)
  },
  SET_PROD_SORTER({ commit }, pl) {   
    commit('SET_PROD_SORTER', pl)
  },
  SAVE_SORTED_PRODS({ commit, state }, pl) {
    const EPs = state.enterData
    const HTL = pl === 'По убыванию цены'
    const LTH = pl === 'По возрастанию цены'
    let SPs = []
    if (HTL || LTH) {
      SPs = EPs.map(pd => {
        pd.arts = pd.arts.sort((a, b) => {
          const ap = a.salePrice
          const bp = b.salePrice
          return HTL ? (bp - ap) : (ap - bp)
        })
        return pd
      })
    } else if (pl === 'По наличию') {
      SPs = EPs.map(pd => {
        pd.arts = pd.arts.sort((a, b) => a.stock - b.stock)
        return pd
      })
    } else if (pl === 'По популярности') {
      SPs = EPs.map(pd => {
        pd.arts = pd.arts.sort((a, b) => a.rate - b.rate)
        return pd 
      })
    }
    commit('SAVE_SORTED_PRODS', SPs)
  },

  SAVE_FILTERED_PRODS({ commit, state }, ft) {
    const SPs = state.prodsSorted // sorted prods
    
    // 1) filter for block size
    let FPs_1 = []
    if (ft.sizes.length) {
      FPs_1 = SPs.filter(it => {
        return ft.sizes.includes(it.size.sm) || ft.sizes.includes(it.size.lg)
      })
    } else FPs_1 = [...SPs]
    
    // 2) filter for home of outdoor
    let FPs_2 = []
    if (ft.purpose.length) {
      FPs_2 = FPs_1.filter(it => ft.purpose.includes(it.purp))
    } else FPs_2 = [...FPs_1]
    
    // 3) filter for number of contour
    let FPs_3 = []
    if (ft.contour.length) {
      FPs_3 = FPs_2.filter(it => ft.contour.includes(it.cont.toString()))
    } else FPs_3 = [...FPs_2]
    
    // 4) filter for mirror
    let FPs_4 = FPs_3.filter(it => ft.hasMirror ? it.mirr : it)
    
    // 5) filter for defects
    let FPs_5 = []
    if (ft.defects.length) {
      FPs_5 = FPs_4.map(it => {
        const { arts, ...nIt } = { ...it }
        const ftArts = arts.filter(art => ft.defects.includes(art.dfct))
        console.log(ftArts.length)
          nIt.arts = ftArts
          return nIt
      })
    } else FPs_5 = [...FPs_4]
    // 5) filter for empty arts array
    let FPs_6 = FPs_5.filter(it => it.arts.length)
    commit('SAVE_FILTERED_PRODS', FPs_6)
  }
}