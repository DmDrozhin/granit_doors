<template>
  <div class="comp-prod-preview prev">
    <comp-modal class="prev__modal">
      <comp-preview-slider class="prev__slider"/>
    </comp-modal>
  </div>
</template>

<script>
import compModal from '@/components/comp-modal.vue'
import compPreviewSlider from '@/components/comp-preview-slider.vue'
export default {
  name: 'comp-prod-preview',
  components: { compModal, compPreviewSlider },
  data() {
    return{ }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.comp-prod-preview, .prev{
  // &__modal {
  // }
  // &__slider {
  // }

}

</style>