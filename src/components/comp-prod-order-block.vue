<template>
  <div class="comp-prod-order-block ord">
    <ui-price-block-base>

      <template #sale>
        <ui-sale-star
          :sale="slideData.saleNum"
        ></ui-sale-star>
      </template>

      <template #price>
        <ui-price
          :setts="{ price: slideData.price, salePrice: slideData.salePrice }"
        ></ui-price>
      </template>

      <template #inStock>
        <ui-in-stock-block
          :stock="slideData.stock"
        ></ui-in-stock-block>
      </template>

      <template #button>
        <ui-order-button-shop-cart
          @order="startOrder()"
          :stock="slideData.stock"
        ></ui-order-button-shop-cart>
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
  props: {
    doorId: { type: Number, default: undefined },
    prod: { type: Object, default: () => {} } 
  },
  data() {
    return {
      currSlide: ''
    }
  },
  watch: {
    activity(slide) {
      this.currSlide = slide.currArtId
    },
  },
  methods: { 
    startOrder() {
      const {arts, ...order} = { ...this.prod }
      arts
      order.art = this.slideData
      this.$emit('update:order', order)
      this.$emit('order')
    }
  },
  computed: {
    ...mapGetters('product', ['SETTS', 'SLIDE_INFO']),
    activity() { return this.SLIDE_INFO(this.doorId) },
    slideData() { return { ...this.prod.arts[this.currSlide] } },
    // slideData() { return this.prod.arts[this.currSlide] }, // bad

  },
  mounted() {
    this.currSlide = this.SLIDE_INFO(this.doorId)
  }
}
</script>

<style lang="scss" scoped>
// .comp-prod-order-block, .ord { }
</style>
