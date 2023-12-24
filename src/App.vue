<template>
  <div class="app" :style="style">
    <comp-modal></comp-modal>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import compModal from '@/components/comp-modal.vue'
export default {
  components: { compModal },
  computed: {
    ...mapGetters('common', ['isModalOn']),
    style() { return this.isModalOn ? { overflow: 'hidden', pointerEvents: 'none' } : { overflow: 'auto', pointerEvents: 'all' }
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
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
