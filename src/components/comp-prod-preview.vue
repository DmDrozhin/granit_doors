<template>
  <div class="comp-prod-preview prev">
    <comp-modal>
      <comp-pop-slider></comp-pop-slider>
    </comp-modal>


  </div>
  
</template>

<script>
import compModal from '@/components/comp-modal.vue'
import compPopSlider from '@/components/comp-pop-slider.vue'
export default {
  name: 'comp-prod-preview',
  components: { compModal, compPopSlider },
  data() {
    return{

    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.comp-prod-preview, .prev{

}

</style>