<template>
  <comp-modal :isOn="this.$store.getters['common/MODAL_STATUS']">
    <template #preview>
      <comp-preview-slider
        v-if="this.$store.getters['product/PREVIEW'].isOn"
        :prod="this.$store.getters['product/PREVIEW']"
      ></comp-preview-slider>
    </template>
    <template #callback>
      <comp-pop-callback
        v-if="this.$store.getters['common/CALLBACK'].isOn"
      ></comp-pop-callback>
    </template>
    <template #order>
      <comp-pop-order
        v-if="this.$store.getters['common/ORDER_POP'].isOn"
      ></comp-pop-order>
    </template>
  </comp-modal>

  <section class="main-page">
    <header-section></header-section>
    <main-section></main-section>
    <footer-section></footer-section>
  </section>
</template>

<script>
import compModal from '@/components/comp-modal.vue'
import compPreviewSlider from '@/components/comp-prod-preview-slider.vue'
import headerSection from './header-section.vue'
import mainSection from './main-section.vue'
import footerSection from './footer-section.vue'

import compPopCallback from '@/components/comp-pop-callback.vue'
import compPopOrder from '../components/comp-pop-order.vue'

export default {
  name: 'main-page',
  components: { compModal, compPreviewSlider, headerSection, mainSection, footerSection, compPopCallback, compPopOrder, },
  data() {
    return {
      title: 'main page'
    }
  },
  computed: {
    prev() { return this.$store.getters['product/PREVIEW'] } 
  },
  mounted() {
    this.$store.dispatch('common/SET_VIEWPORT', window.innerWidth),
    window.addEventListener('resize', (e) => { this.$store.dispatch('common/SET_VIEWPORT', e.target.innerWidth) })
    // window.addEventListener('focus', (e) => { console.log(e.target) }, true)
  },
  onBeforeUnmount() { removeEventListener('resize') },
}
</script>

<style lang="scss" scoped>
// .main-page { }

</style>
