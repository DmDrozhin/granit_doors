export default {
  SETTS: (state) => state.enterSetts,
  SLIDE_INFO: (state) => (doorId) => state.currSlide[doorId],

  SORTED: (state) => {
    const SPs = state.enterData
    const HTL = state.settsSorter === 'По убыванию цены'
    const LTH = state.settsSorter === 'По возрастанию цены'
    if (HTL || LTH) {
      SPs.map(prod => {
        return prod.arts.sort((a, b) => {
          return HTL ? (b.salePrice - a.salePrice) : (a.salePrice - b.salePrice)
        })
      })
      return SPs
    }
    if (state.settsSorter === 'По наличию') {
      SPs.map(prod => prod.arts.sort((a, b) => a.stock - b.stock))
      return SPs
    }
    if (state.settsSorter === 'По популярности') {
      SPs.map(prod => prod.arts.sort((a, b) => a.rate - b.rate))
      return SPs
    }
    return SPs
  },

  FILTERED: (state, getters) => {
    const FPs = getters.SORTED
    const ft = state.settsFilter
    
    // 1) filter for block size
    let FPs_1 = []
    if (ft.sizes.length) {
      FPs_1 = FPs.filter(it => {
        return ft.sizes.includes(it.size.sm) || ft.sizes.includes(it.size.lg)
      })
    } else FPs_1 = [...FPs]
    
    // 2) filter for home of outdoor
    let FPs_2 = []
    if (ft.purpose.length) {
      FPs_2 = FPs_1.filter(it => ft.purpose.includes(it.purp))
    } else FPs_2 = [...FPs_1]
    
    // 3) filter for number of contour
    let FPs_3 = []
    if (ft.contour.length) {
      // FPs_3 = FPs_2.filter(it => ft.contour.includes(it.cont) )
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

    return FPs_6
  }
}