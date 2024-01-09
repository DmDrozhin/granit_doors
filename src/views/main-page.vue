<template>
  <section class="main-page">
    <header-section></header-section>
    <main-section></main-section>
    <footer-section></footer-section>
  </section>
</template>

<script>
import headerSection from './header-section.vue'
import mainSection from './main-section.vue'
import footerSection from './footer-section.vue'

export default {
  name: 'main-page',
  components: { headerSection, mainSection, footerSection },
  data() {
    return {
      title: 'main page'
    }
  },
  mounted() {
    this.$store.dispatch('common/SET_W', window.innerWidth),
    window.addEventListener('resize', (e) => {
      this.$store.dispatch('common/SET_W', e.target.innerWidth)
      // console.log(e.target.innerWidth)
    })
  },
  onBeforeUnmount() {
    removeEventListener('resize')
  },
}
</script>

<style lang="scss" scoped>
.main-page {
  // height: 100vh;

}
</style>
