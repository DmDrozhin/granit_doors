<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: { },
  mounted() { console.log(window.devicePixelRatio) },
  methods: { }
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
