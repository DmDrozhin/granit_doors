export default {
  // For use with modal window
  mounted(el, bind) {
    if (bind.value) {
      document.body.style.overflow = 'hidden'
    }
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto'
  },
  name: 'body-hidden'
}
