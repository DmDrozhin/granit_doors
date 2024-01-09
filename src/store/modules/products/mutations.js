export default {
  SET_CURR_SLIDE: (state, pl) => state.currSlide[pl.doorId] = pl,
  SET_CURR_ART_DATA: (state, pl) => {
    state.currArt[pl.doorId] = { 
      art: pl.currArt, 
      data: state.prods[pl.doorId].arts[pl.currArt]
    }
  },
  SET_PROD_FILTER: (state, pl) => state.settsFilter = pl,
  SET_PROD_SORTER: (state, pl) => state.settsSorter = pl,
}