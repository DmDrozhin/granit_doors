<template>
  <div class="main-page">
    <header-section></header-section>
    <main-section></main-section>
    <h1 class="title">{{ title }}</h1>
    <footer-section></footer-section>
  </div>
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
    window.addEventListener('resize', (e) => {
      // console.log(e.target.innerWidth)
      this.$store.dispatch('common/SET_W', e.target.innerWidth)
    })
  },
  onBeforeUnmount() {
    removeEventListener('resize')
  },
}
</script>

<style lang="scss" scoped>
  .title h1 {

  }
</style>
