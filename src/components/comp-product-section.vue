<template>
  <article class="comp-product-section prod">
    <div class="prod__wrap">
      <div class="prod__carousel">
        <comp-prod-slider
          :doorId="doorId"
          :prod="prod"
        ></comp-prod-slider>
      </div>
      <div class="prod__details">
        <comp-prod-info
          :doorId="doorId"
          :prod="prod"
          v-model:details="chosenDetails"
        ></comp-prod-info>
      </div>
      <div class="prod__order">
        <comp-prod-order-block
          :doorId="doorId"
          :prod="prod"
          v-model:order="chosenProd"
          @order="startOrder"
        ></comp-prod-order-block>
      </div>
      <div class="prod__pagination">
        <ui-pagination-block
          :doorId="doorId"
          :prod="prod"
        ></ui-pagination-block>
      </div>
    </div>
  </article>
</template>

<script>
import compProdSlider from '@/components/comp-prod-slider.vue'
import compProdInfo from '@/components/comp-prod-info.vue'
import compProdOrderBlock from '@/components/comp-prod-order-block.vue'
import uiPaginationBlock from '@/components/UI/ui-pagination-block.vue'

export default {
  name: 'comp-product-section',
  components: { compProdSlider, compProdInfo, compProdOrderBlock, uiPaginationBlock },
  props: {
    doorId: { type: Number, default: 0 },
    prod: { type: Object, default: () => {} }
  },
  data() {
    return{
      chosenProd: {},
      chosenDetails: {}
    }
  },
  methods: {
    startOrder() {
      const { ...order } = { ...this.chosenProd }
      order.options = this.chosenDetails
      // console.log(order)
      this.$store.dispatch('common/SET_ORDER_POP', { isOn: true, order } )
    }
  },
  computed: { },
}
</script>

<style lang="scss" scoped>
.comp-product-section, .prod {
  &__wrap {
    @include media('min', 'sm') { padding: 30px 0 50px 0; }
    @include media('min', 'lg') { padding: 26px 0 22px 21px; }
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
    margin-bottom: 25px;
  }
  &__pagination {
    
  }
}


</style>