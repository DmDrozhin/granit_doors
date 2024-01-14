<template>
  <section class="main">
    <div class="main__container">
      <div class="main__wrap">

        <div class="main__sec1 sec1">
          <sidebar-section class="sec1__aside"></sidebar-section>
        </div>

        <div class="main__sec2 sec2">
          <comp-product-section
            v-for="(it, idx) in filtered"
            :key="it.id"
            :doorId="idx"
            :prod="it"
          ></comp-product-section>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import sidebarSection from './sidebar-section.vue'
import compProductSection from '@/components/comp-product-section.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'main-section',
  components: { sidebarSection, compProductSection },
  data() {
    return {
    }
  },
  methods: { },
  computed: {
    ...mapGetters('product', ['FILTERED']),
    filtered() { return this.$store.getters['product/FILTERED'] }
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  width: 100%;
  height: 100%;
&__container {
    // border: 1px solid peru; // tech
    // background-color: #dcdcdc;
    @include container-width;
    @include media('min', 'sm') { min-height: 800px; }
    @include media('min', 'lg') { min-height: 800px; }
  }
  &__wrap {
    @include media('min', 'sm') { @include fc; }
    @include media('min', 'lg') { @include fr; }
  }
  &__sec1, .sec1 {
    @include media('min', 'sm') { flex: 0 1 auto; }
    @include media('min', 'lg') { flex: 0 0 236px; } // width of aside 236px
  }
  &__sec2, .sec2 {
    flex: 1 1 auto;
  }
}
</style>

