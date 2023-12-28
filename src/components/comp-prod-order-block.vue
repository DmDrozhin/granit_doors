<template>
  <div class="comp-prod-order-block ord">
    <ui-price-block-base>

      <template #sale>
        <ui-sale-star></ui-sale-star>
      </template>

      <template #price>
        <ui-price></ui-price>
      </template>

      <template #inStock>
        <ui-in-stock-block></ui-in-stock-block>
      </template>

      <template #button>
        <ui-order-button-shop-cart></ui-order-button-shop-cart>
      </template>

    </ui-price-block-base>
  </div>
  
</template>

<script>
import uiPriceBlockBase from '@/components/UI/ui-price-block-base.vue'
import uiInStockBlock from '@/components/UI/ui-in-stock-block.vue'
import uiOrderButtonShopCart from '@/components/UI/ui-order-button-shop-cart.vue'
import uiPrice from '@/components/UI/ui-price.vue'
import uiSaleStar from '@/components/UI/ui-sale-star.vue'
export default {
  name: 'comp-prod-order-block',
  components: { uiPriceBlockBase, uiSaleStar, uiInStockBlock, uiOrderButtonShopCart, uiPrice },
  data() {
    return {}
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.comp-prod-order-block, .ord {

}


</style>