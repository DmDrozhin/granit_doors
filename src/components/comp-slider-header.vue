<template>
    <div class="comp-slider-header slider">
      <swiper-container
        class="slider__container"
        init="false"
        ref="slider"
      >
        <swiper-slide 
          class="slider__slide"
          v-for="(img, idx) in slides" :key="idx"
        >
          <img 
            class="slider__pic"
            :src="img.src" 
            :srcset="img.srcset.join(', ')"
          >
        </swiper-slide>
      </swiper-container>
    </div>
</template>

<script>
import { EffectCoverflow } from 'swiper/modules'

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
    goL(){ this.$refs.slider.swiper.slidePrev() },
    goR(){ this.$refs.slider.swiper.slideNext() },    
    setSlider() {
      const slider = this.$refs.slider
      const setts = {
        modules: [EffectCoverflow],
        effect: 'coverflow',
        grabCursor: true,
        slidesPerView: 'auto',
        loop: true,
      }
      Object.assign(slider, setts)
      slider.initialize()
    },
    watchGo() {this.$refs.slider.swiper.on('transitionEnd', (e) => {
      const dir = e.swipeDirection
      // console.log(dir)
      if (dir === 'next' || dir === 'prev') {
        this.$emit('goTo', dir)
      }
      
    })}
  },
  computed: {
    ...mapGetters('slider', ['sm', 'lg']),
    ...mapGetters('common', ['scrw', 'bpns']),
    slides() { return this.scrw >= this.bpns.lg ? this.lg : this.sm }
  },
  mounted() {
    this.setSlider()
    this.watchGo()
  }
}
</script>

<style lang="scss" scoped>
.comp-slider-header, .slider {
  // &__container { }
  // &__slide { }
  &__pic {
    width: 100%;
    display: flex;
  }
}
</style>
