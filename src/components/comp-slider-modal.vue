<template>
  <div class="comp-slider-modal slider">
    <div class="slider__wrap">

      <swiper-container
        class="door-show"
        thumbs-swiper=".door-thumbs"
        slides-per-view="1"
        navigation=true
      >
        <swiper-slide
          class="door-show__slide slide"
          v-for="(it, idx) in doors"
          :key="idx"
        >
          <div class="slide__content content">
            <ui-art :setts="it.art" class="content__art"></ui-art>
            <img class="content__pic" :src="it.src">
          </div>
        </swiper-slide>
      </swiper-container>

      <swiper-container
        class="door-thumbs"
        ref="thumbs"
        slides-per-view="4"
      >
        <swiper-slide
          class="door-thumbs__slide"
          v-for="(it, idx) in doors"
          :key="idx"
        >
          <img class="door-thumbs__pic" :src="it.src">
        </swiper-slide>
      </swiper-container>

    </div>

      <!-- <button
        @click="imgArr"
        style="{border: 2px solid blue; background-color: orange; padding: 8px 25px; border-radius: 10px; }">Run slider
      </button> -->

  </div>
  
</template>

<script>
// import { register } from 'swiper/element/bundle'
// register()

import { mapGetters } from 'vuex'

export default {
  name: 'comp-slider-modal',
  data() {
    return{
      currProd: 0
    }
  },

  computed: {
    ...mapGetters('product', ['prods']),
    doors() { return this.imgArr() }
  },

  methods: {
    imgArr() {
      const arts = this.prods[0].arts
      let arr = []
      for (const it in arts) {
        const unt = { art: '', src: '' }
        unt.art = 'Арт. ' + it.slice(1)
        unt.src = arts[it].src.join(', ')
        arr.push(unt)
      }
      return arr
    },
    setThumbs() {
      const swp = this.$refs.thumbs
      swp.breakpoints = { 100: { spaceBetween: 12 }, 1440: { spaceBetween: 20 } }
      // const setts = { breakpoints: { 100: { spaceBetween: 12 }, 1440: { spaceBetween: 20 } } }
      // Object.assign(swp, setts)
    }
  },
  mounted() {
    this.setThumbs()
    // console.log(this.$refs.thumbs.swiper.params.spaceBetween)
  },
}
</script>

<style lang="scss" scoped>
$w-lg: 486px;
$w-sm: 320px;
.slider {
  border: 1px dotted rgb(219, 7, 78);
  &__wrap {    
    position: relative;
    @include fc-sb-c;
    .door-show {
      flex: 1;
      background-color: #c2d5db;;
      @include media('min', 'sm') { width: $w-sm; height: 630px; margin-bottom: auto; }
      @include media('min', 'lg') { width: $w-lg; height: 607px; margin-bottom: 22px; }
      &__slide, .slide {

        @include fr-c-c;
        &__content, .content {
          @include media('min', 'sm') { height: 630px; }
          @include media('min', 'lg') { height: 607px; }
          &__art {
            position: absolute;
            width: fit-content;
            @include media('min', 'sm') { left: 8px; right: auto; top: 14px; }
            @include media('min', 'lg') { left: auto; right: 25px; top: 22px; }
          }
          &__pic {
            @include media('min', 'sm') { height: 630px; }
            @include media('min', 'lg') { height: 607px; }
          }
        }
      }
    }
    .door-thumbs {
      // background-color: #c2d5db;
      // border: 1px solid lawngreen;
      @include media('min', 'sm') {
        width: calc( $w-sm - 30px );
        height: 118px;
        position: absolute;
        bottom: 20px;
      }
      @include media('min', 'lg') {
        top: 0;
        width: $w-lg; 
        height: 127px;
        position: relative;
      }
      &__pic {
        @include media('min', 'sm') { width: 65px; height: 118px; }
        @include media('min', 'lg') { width: 107px; height: 127px; }
        object-fit: cover;
      }
    }
  }
}
.swiper-slide-visible {
  opacity: 0.8;
}
.swiper-slide-thumb-active {
  opacity: 1;
  // outline: 3px solid $green-lt;
}
swiper-container::part(button-next) {
  color: #fff;
}
swiper-container::part(button-prev) {
  color: #fff;
}
</style>
