export default {
  SETTS: (state) => state.enterSetts,
  SLIDE_INFO: (state) => (doorId) => state.currSlide[doorId],
  FILTERED: (state) => state.prodsFiltered,
  SORTED: (state) => state.prodsFiltered,
  PREVIEW: (state) => state.preview
}