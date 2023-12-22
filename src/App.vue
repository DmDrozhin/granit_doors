<template>
  <div class="app">
    <comp-modal></comp-modal>
    <router-view/>
  </div>
</template>

<script>
import compModal from '@/components/comp-modal.vue'
export default {
  components: { compModal },
}
</script>

<style lang="scss" scoped>
.app {
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
