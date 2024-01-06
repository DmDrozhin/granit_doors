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
          :price="price"
          :sale="sale"
        ></ui-price>
      </template>

      <template #inStock>
        <ui-in-stock-block
          :stock="stock"
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
    return {
      sale: null,
      stock: null,
      price: null
    }
  },
  watch: {
    currArt(v) { 
      this.sale = this.SETTS.sale[v.data.sale] 
      this.stock = v.data.stock
      this.price = v.data.price
    }
  },
  methods: { },
  computed: {
    ...mapGetters('product', ['PROD', 'ART_DATA', 'SETTS']),

    prodDt() { return this.PROD(this.doorId) },
    currArt() { return this.ART_DATA(this.doorId) },
  }
}
</script>

<style lang="scss" scoped>
// .comp-prod-order-block, .ord {

// }
</style>
