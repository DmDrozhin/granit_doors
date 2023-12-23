<template>
  <div class="comp-pop-slider slider">
    <div class="slider__container">
      <div class="slider__nav mav">
        <button class="nav__l" ref="btnL">
          <ui-icon-nav-arrow :setts="{ col: '#fff', rot: 180 }"/>
        </button>
        <button class="nav__r" ref="btnR" >
          <ui-icon-nav-arrow :setts="{ col: '#fff', rot: 0 }"/>
        </button>
      </div>
      <div class="slider__wrap">
        <button class="slider__close" @click="close"><ui-icon-close/></button>

        <swiper-container
          class="door-show"
          ref="main"
          init="false"
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
          init="false"
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
    </div>

      <!-- <button
        @click="imgArr"
        style="{border: 2px solid blue; background-color: orange; padding: 8px 25px; border-radius: 10px; }">Run slider
      </button> -->

  </div>
  
</template>

<script>

import { Thumbs, Navigation } from 'swiper/modules'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'comp-pop-slider',
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
    ...mapActions('common', ['SET_MDW']),
    close() { this.SET_MDW(false) },
  
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
    setSlider() {
      const main = this.$refs.main
      const thumbs = this.$refs.thumbs
      const mSetts = { 
        modules: [Thumbs, Navigation],
        slidesPerView: 1, 
        thumbs: { swiper: thumbs },
        grabCursor: true,
        navigation: {
          prevEl: this.$refs.btnL,
          nextEl: this.$refs.btnR
        }
      }
      const tSetts = {
        breakpoints: { 100: { spaceBetween: 12 }, 1440: { spaceBetween: 20 } },
        slidesPerView: 4,
        grabCursor: true,
      }
      Object.assign(main, mSetts)
      main.initialize()
      Object.assign(thumbs, tSetts)
      thumbs.initialize()
    }
  },
  mounted() {
    this.setSlider()
  },
}
</script>

<style lang="scss" scoped>
$w-lg: 486px;
$w-sm: 320px;
.slider {
  // border: 1px dotted rgb(18, 219, 7); // tech
  height: 100vh; // that's ok

  @include gpc;
  &__container {
    // border: 1px dotted rgb(41, 19, 26);  // tech
    @include media('min', 'sm') { width: $w-sm; }
    @include media('min', 'lg') { width: 950px; }
    @include gpc;
    position: relative;
  }
  &__wrap {
    // border: 1px dotted rgb(219, 39, 7); // tech
    @include media('min', 'sm') { width: $w-sm; }
    @include media('min', 'lg') { width: $w-lg; }
    position: relative;
    @include fc-sb-c;
    .door-show {
      flex: 1;
      // background-color: #c2d5db; // tech
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
  &__nav, .nav{
    $nw: 35px;
    position: absolute;
    @include media('min', 'sm') { display: none; }
    @include media('min', 'lg') { @include fr-sb-c; }
    top: calc(50% - 15px);
    // border: 1px dotted rgb(7, 120, 219); // tech
    // background-color: #a8a3a3;  // tech
    width: inherit;
    &__l { width: $nw; }
    &__r { width: $nw; }
  }
  &__close {
    position: absolute;
    // background-color: rgb(207, 207, 207); // tech
    width: 25px;
    z-index: 10;
    @include media('min', 'sm') { right: 10px; top: 24px; }
    @include media('min', 'lg') { right: 0; top: -36px; }
  }
}
.swiper-slide-visible {
  opacity: 0.8;
}
.swiper-slide-thumb-active {
  opacity: 1;
  // outline: 3px solid $green-lt;
}
.swiper-button-disabled {
  opacity: 0.5;
}
</style>
