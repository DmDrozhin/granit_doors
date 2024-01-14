<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: { },
  created() { this.$store.dispatch('product/SAVE_INCOMING_DATA') }
}
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  margin: 0 auto;
  @include general-width;
  @include container-paddings;
}

// nav {
//   a {
//     &.router-link-exact-active { }
//   }
// }
</style>
