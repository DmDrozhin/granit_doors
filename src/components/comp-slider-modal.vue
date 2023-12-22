<template>
  <div class="comp-slider-modal slider">
    <swiper-container
      slides-per-view="1"
      grid-rows="1"
      mousewheel-force-to-axis="true"
    >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  ...
</swiper-container>
  </div>
  
</template>

<script>
import { register } from 'swiper/element/bundle'
register()

export default {
  name: 'comp-slider-modal',
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
.comp-slider-modal, .slider {

}
swiper-container {

}
swiper-slide {

}


</style>