<template>
  <main class="main">
    <div>
      <compFilter></compFilter>
    </div>
    <div>
      <button 
        @click="doBtn"
        style="{border: 2px solid blue; background-color: orange; padding: 8px 25px; border-radius: 10px; }"
      >Open modal
      </button>
    </div>
    <!-- <div>
      <tmp-c></tmp-c>
    </div> -->
    <!-- <div>
      <slider></slider>
    </div> -->
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

  </main>
  
</template>

<script>
import compFilter from '../components/comp-filter-select.vue'
import compProdPreview from '../components/comp-prod-preview.vue'
import uiButtonOpening from '@/components/UI/ui-button-opening.vue'
import uiButtonDoorSize from '@/components/UI/ui-button-door-size.vue'
import compProdOrderBlock from '@/components/comp-prod-order-block.vue'

import { mapActions } from 'vuex'

export default {
  name: 'main-section',
  components: { compFilter, compProdPreview, uiButtonOpening, uiButtonDoorSize, compProdOrderBlock },
  // components: { compFilter, slider },
  data() {
    return{ 

    }
  },
  methods: {
    ...mapActions('common', ['SET_MDW']),
    doBtn() {this.SET_MDW(true)}
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
}
  .btn {
    // width: 191px;
    height: 44px;
    @include media('min', 'sm') { width: 270px; }
    @include media('min', 'lg') { width: 191px; }
  }
  .sale-star {
    width: 42px;
  }

</style>