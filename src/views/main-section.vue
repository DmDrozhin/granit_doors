<template>
  <main class="main">
    <div>
      <compFilter></compFilter>
    </div>
    <div class="main__wrap">
      <div class="main__l">
        <div>
          <button @click="doBtn"
            style="{border: 2px solid blue; background-color: orange; padding: 8px 25px; border-radius: 10px; }">Open
            modal
          </button>
        </div>
        <div>
          <comp-prod-preview></comp-prod-preview>
        </div>
        <br>
        <div class="btn-opening">
          <ui-button-opening></ui-button-opening>
        </div>
        <br>
        <div class="btn-door-size">
          <ui-button-door-size></ui-button-door-size>
        </div>
        <br>
        <br>
        <div>
          <comp-prod-order-block></comp-prod-order-block>
        </div>
      </div>
      <div class="main__r">
        <comp-prod-slider></comp-prod-slider>
      </div>
    </div>
  </main>
</template>

<script>
import compFilter from '../components/comp-filter-select.vue'
import compProdPreview from '../components/comp-prod-preview.vue'
import uiButtonOpening from '@/components/UI/ui-button-opening.vue'
import uiButtonDoorSize from '@/components/UI/ui-button-door-size.vue'
import compProdOrderBlock from '@/components/comp-prod-order-block.vue'

import compProdSlider from '@/components/comp-prod-slider.vue'

import { mapActions } from 'vuex'

export default {
  name: 'main-section',
  components: { compFilter, compProdPreview, uiButtonOpening, uiButtonDoorSize, compProdOrderBlock, compProdSlider },
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

  }
}
</script>

<style lang="scss" scoped>
.main {
  @include main;
  @include container-width;
  border: 1px solid peru;
  // background-color: #dcdcdc;
  &__wrap {
    gap: 30px;
    @include media('min', 'sm') { @include fc; }
    @include media('min', 'lg') { @include fr; }
  }
}
</style>

