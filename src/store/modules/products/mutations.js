export default {
  SAVE_INCOMING_DATA: (state, pl) => {
    state.enterSetts = pl.setts
    state.enterData = pl.data
  },

  SET_CURR_SLIDE: (state, pl) => state.currSlide[pl.doorId] = pl,
  SET_CURR_ART_DATA: (state, pl) => {
    state.currArt[pl.doorId] = { 
      art: pl.currArt, 
      data: state.prods[pl.doorId].arts[pl.currArt]
    }
  },
  SET_PROD_FILTER: (state, pl) => state.settsFilter = pl,
  SET_PROD_SORTER: (state, pl) => state.settsSorter = pl,

  SAVE_SORTED_PRODS: (state, pl) => state.prodsSorted = pl,
  SAVE_FILTERED_PRODS: (state, pl) => state.prodsFiltered = pl,
}