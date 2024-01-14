<template>
  <div class="comp-prod-preview prev">
    <comp-modal
      class="prev__modal"
      :unID="unID"
    >
      <comp-preview-slider
        class="prev__slider"
        :doorId="doorId"
        :unID="unID"
        :prod="prod"
      />
    </comp-modal>
  </div>
</template>

<script>
import compModal from '@/components/comp-modal.vue'
import compPreviewSlider from '@/components/comp-prod-preview-slider.vue'
export default {
  name: 'comp-prod-preview',
  components: { compModal, compPreviewSlider },
  props: {
    doorId: { type: Number, default: 0 },
    unID: { type: String, default: '' },
    prod: { type: Object, default: () => {} }
  },
  data() {
    return{ }
  }
}
</script>

<style lang="scss" scoped>
// .comp-prod-preview, .prev{
  // &__modal { }
  // &__slider { }
// }
</style>
