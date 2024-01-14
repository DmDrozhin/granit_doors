export default {
  updated(el) {
    const num = Number(el.innerHTML)
    const formatted = new Intl.NumberFormat('uk-UA', {
      style: 'currency', 
      currency: 'UAH', 
      maximumFractionDigits: 0
    }).format(num)
    el.innerHTML = formatted
  },
  name: 'num-to-uah'
}