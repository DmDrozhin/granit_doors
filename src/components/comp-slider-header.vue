<template>
    <div class="comp-slider-header slider">
      <swiper-container
        ref="swp"
        effect="coverflow"
        grabCursor="true"
        slides-per-view="1"
        loop="true"
        events-prefix="swiper-"
      >
        <swiper-slide v-for="(img, idx) in slides" :key="idx">
          <img :src="img.src" :srcset="img.srcset.join(', ')">
        </swiper-slide>
      </swiper-container>
    </div>
</template>

<script>
// Events: 'swiper-progress', 'swiper-slidechange'
import { register } from 'swiper/element/bundle'
register()
import { mapGetters } from 'vuex'

export default {
  name: 'comp-slider-header',
  props: { go: { type: Object, default: () => {} } },
  data() {
    return{ }
  },
  watch: {
    go(to) { 
      if (to.go === 'R') this.goR() 
      else if (to.go === 'L') this.goL() 
    }
  },
  methods: {
    goL(){ this.$refs.swp.swiper.slidePrev() },
    goR(){ this.$refs.swp.swiper.slideNext() },
  },
  computed: {
    ...mapGetters('slider', ['sm', 'lg']),
    ...mapGetters('common', ['scrw', 'bpns']),
    slides() { return this.scrw >= this.bpns.lg ? this.lg : this.sm }
  },
  // mounted() { this.$refs.swp.addEventListener('swiper-slidechange', (e) => {
  //   console.log(e)
  // })}

}
</script>

<style lang="scss" scoped>
swiper-container {
}
swiper-slide {
  img {
    width: 100%;
    display: flex;
  }
}
</style>
