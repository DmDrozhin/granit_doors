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
        nArts.push(part)
      }
      const { arts, ...newProd } = { ...it }
      arts
      newProd.arts = nArts
      return newProd
    })
  },

  // SORTED: (state) => {
  //   if (state.settsSorter === 'По убыванию цены') {
  //     state.prods.forEach(it => {
  //       it.arts.sort()
  //     })
  //   }
  // }
}