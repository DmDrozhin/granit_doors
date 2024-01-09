export default {
  mounted(el) {
    const val = el.innerHTML
    // console.log(typeof(val))
    if (val) {
      el.innerHTML = val === 'true' ? 'Есть' : 'Нет'
    }
  },
  name: 'bool-to-string'
}