<template>
  <main class="main">
    <div class="main__container">
      <div class="main__wrap">

        <div class="main__sec1 sec1">
          <aside-section class="sec1__aside"></aside-section>
        </div>

        <div class="main__sec2 sec2">
          <comp-product-section
            v-for="(it, idx) in prodsArrLength"
            :key="idx"
            :doorId="idx"
          ></comp-product-section>
        </div>
        
      </div>
    </div>
  </main>
</template>

<script>
import asideSection from '../views/aside-section.vue'
import compProductSection from '@/components/comp-product-section.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'main-section',
  components: { asideSection, compProductSection },
  // components: { compFilter, slider },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions('common', ['SET_MDW']),
    doBtn() { this.SET_MDW(true) }
  },
  computed: {
    ...mapGetters('product', ['PRODS']),
    prodsArrLength() { return this.PRODS.length}
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
    flex: 0 0 236px; // width of aside 236px
  }
  &__sec2, .sec2 {
    flex: 1 1 auto;
  }
}
</style>

