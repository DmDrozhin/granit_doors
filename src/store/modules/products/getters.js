export default {
  SETTS: (state) => state.setts,
  PRODS: (state) => state.prods,
  PROD: (state) => (doorId) => state.prods[doorId], //used
  ARTS_ARR: (state) => (doorId) => Object.keys(state.prods[doorId].arts), //used
  SLIDE_INFO: (state) => (doorId) => state.currSlide[doorId], //used
  ART_DATA: (state) => (doorId) => state.currArt[doorId], //used
  PAGINATION_DATA: (state) => state.currSlide,

  PRODS_ARR: (state) => {
    return state.prods.map(it => {
      const nArts = []
      for(const art in it.arts) {
        const part = it.arts[art]
        part.art = art
        part.salePrice = part.price * (1 - state.setts.sale[part.sale])
        nArts.push(part)
      }
      const { arts, ...newProd } = { ...it }
      arts
      newProd.arts = nArts
      return newProd
    })
  },

  SORTED: (state, getters) => {
    const SPs = [...getters.PRODS_ARR]
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
    const FPs = [...getters.SORTED]
    const ft = state.settsFilter
    let size = ft.isAllSizes ? 'all' : ft.sizes
    
    // 1) filter for block size
    let FPs_1 = []
    if (size !== 'all') {
      FPs_1 = FPs.filter(it => {
        const sz1 = size.includes(it.size.sm)
        const sz2 = size.includes(it.size.lg)
        return sz1 || sz2 ? true : false
      })
    } else FPs_1 = [...FPs]
    
    // 2) filter for home of outdoor
    let FPs_2 = []
    if (ft.purpose.length) {
      FPs_2 = FPs_1.filter(it => ft.purpose.includes(it.purp) ? true : false )
    } else FPs_2 = [...FPs_1]
    
    // 3) filter for number of contour
    let FPs_3 = []
    if (ft.contour.length) {
      FPs_3 = FPs_2.filter(it => ft.contour.includes(it.cont.toString()) ? true : false )
    } else FPs_3 = [...FPs_2]
    
    // 4) filter for mirror
    let FPs_4 = FPs_3.filter(it => ft.hasMirror ? it.mirr : it)
    
    // 5) filter for defects
    let FPs_5 = []
    if (ft.adds.length) {
      FPs_5 = FPs_4.map(it => {
        const { arts, ...nIt } = { ...it }
        const ftArts = arts.filter(art => ft.adds.includes(art.dfct))
        nIt.arts = ftArts
        return nIt
      })
    } else FPs_5 = [...FPs_4]

    return FPs_5
    // this settsFilter object:
    // isAllSizes: true, // 1) if true, ignore - pickedSizes array
    // sizes: [], // 1) picked out sizes
    // purpose: [], // 2) for flat of for house
    // contour: [], // 3) qt of conturs of 
    // hasMirror: false, // 4) if true, mirror option is picked out
    // adds: [] // 5) picked out add options
  }
}