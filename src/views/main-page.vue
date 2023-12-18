<template>
  <div class="main-page">
    <header-section></header-section>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
import headerSection from './header-section.vue'
export default {
  name: 'main-page',
  components: { headerSection },
  data() {
    return {
      title: 'main page'
    }
  }
}
</script>

<style lang="scss" scoped>
  .title h1 {

  }
</style>
