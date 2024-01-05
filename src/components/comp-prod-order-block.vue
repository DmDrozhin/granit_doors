<template>
  <div class="comp-prod-order-block ord">
    <ui-price-block-base>

      <template #sale>
        <ui-sale-star
          :sale="sale"
        ></ui-sale-star>
      </template>

      <template #price>
        <ui-price
          :price="artDt.price"
          :sale="sale"
        ></ui-price>
      </template>

      <template #inStock>
        <ui-in-stock-block
          :stock="artDt.stock"
        ></ui-in-stock-block>
      </template>

      <template #button>
        <ui-order-button-shop-cart></ui-order-button-shop-cart>
      </template>
      
    </ui-price-block-base>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import uiPriceBlockBase from '@/components/UI/ui-price-block-base.vue'
import uiInStockBlock from '@/components/UI/ui-in-stock-block.vue'
import uiOrderButtonShopCart from '@/components/UI/ui-order-button-shop-cart.vue'
import uiPrice from '@/components/UI/ui-price.vue'
import uiSaleStar from '@/components/UI/ui-sale-star.vue'
export default {
  name: 'comp-prod-order-block',
  components: { uiPriceBlockBase, uiSaleStar, uiInStockBlock, uiOrderButtonShopCart, uiPrice },
  props: { doorId: { type: Number, default: 1 } },
  data() {
    return { }
  },
  methods: { },
  computed: {
    ...mapGetters('product', ['PROD', 'CURR_ARTICLE_DATA', 'SETTS']),

    prodDt() { return this.PROD(this.doorId) },
    artDt() { return {...this.CURR_ARTICLE_DATA(this.doorId)} },
    sale() { return this.SETTS.sale[this.artDt.sale] }
  }
}
</script>

<style lang="scss" scoped>
// .comp-prod-order-block, .ord {

// }
</style>
