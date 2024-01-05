<template>
  <div class="comp-prod-preview prev">
    <comp-modal class="prev__modal">
      <comp-preview-slider
        class="prev__slider"
        :doorId="doorId"
      />
    </comp-modal>
  </div>
</template>

<script>
import compModal from '@/components/comp-modal.vue'
import compPreviewSlider from '@/components/comp-preview-slider.vue'
// import { mapActions } from 'vuex'
export default {
  name: 'comp-prod-preview',
  components: { compModal, compPreviewSlider },
  props: { doorId: { type: Number, default: 0 } },
  data() {
    return{ }
  },
  methods: { 
    // ...mapActions('common', ['SET_MODAL']),
    // setModal() { this.SET_MODAL(true) }
  },
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