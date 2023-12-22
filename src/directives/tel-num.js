export default {
  // For use with interpolation bindings
  mounted(el) {
  // mounted(el, binds) {
    // console.log(el, binds.value)
    let n = el.innerHTML
    // let n = binds.value
    const numericPhoneNumber = n.replace(/\D/g, '')
    const formattedPhoneNumber = numericPhoneNumber.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/,
      '+38 ($2) $3-$4-$5'
    )
    el.innerHTML = formattedPhoneNumber
    // console.log(formattedPhoneNumber)
  },
  name: 'tel-num'
}
