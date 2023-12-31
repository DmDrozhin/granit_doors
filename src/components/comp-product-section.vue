<template>
  <div class="comp-product-section prod">
    <div class="prod__wrap">
      <div class="prod__carousel">
        <comp-prod-slider></comp-prod-slider>
      </div>
      <div class="prod__details">
        <comp-prod-info></comp-prod-info>
      </div>
      <div class="prod__order">
        <comp-prod-order-block></comp-prod-order-block>
      </div>
    </div>
  </div>
</template>

<script>
import compProdSlider from '@/components/comp-prod-slider.vue'
import compProdInfo from '@/components/comp-prod-info.vue'
import compProdOrderBlock from '@/components/comp-prod-order-block.vue'
export default {
  name: 'comp-product-section',
  // components: { compProdSlider, compProdPreview },
  components: { compProdSlider, compProdInfo, compProdOrderBlock },
  data() {
    return{
    }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.comp-product-section, .prod {
  &__wrap {
    @include media('min', 'sm') { padding: 30px 0 50px 0; }
    @include media('min', 'lg') { padding: 26px 0 34px 21px; }
    @include media('min', 'sm') { @include fc; }
    @include media('min', 'lg') { @include fr; }
  }
  &__carousel {
    @include media('min', 'sm') { margin-right: 0px; margin-bottom: 23px; }
    @include media('min', 'lg') { margin-right: 30px; margin-bottom: 0px; }
  }
  &__details {    
    @include media('min', 'sm') { margin-right: 0px; margin-bottom: 23px; }
    @include media('min', 'lg') { margin-right: 15px; margin-bottom: 0px; }
  }
  &__order {

  }
}


</style>