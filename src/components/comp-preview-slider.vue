<template>
  <div class="comp-preview-slider slider">
    <div class="slider__container">

      <div class="slider__nav nav">
        <button class="nav__l" ref="btnL">
          <ui-icon-nav-arrow :setts="{ col: '#fff', rot: 180 }"/>
        </button>
        <button class="nav__r" ref="btnR" >
          <ui-icon-nav-arrow :setts="{ col: '#fff', rot: 0 }"/>
        </button>
      </div>

      <div class="slider__wrap">

        <div class="slider__close-wrap close">
          <button class="close__btn" @click="close"><ui-icon-close/></button>
        </div>

        <swiper-container
          class="door-show"
          ref="main"
          thumbs-swiper=".door-thumbs"
          init="false"
        >
          <swiper-slide
            class="door-show__slide slide"
            v-for="(it, idx) in doors"
            :key="idx"
          >
            <div class="slide__content content">
              <ui-art :setts="it.art" class="content__art"></ui-art>
              <img class="content__pic" :src="it.src1">
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
            <img class="door-thumbs__pic" :src="it.src1">
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'comp-preview-slider',
  props: { doorId: { type: Number,  default: 0 } },
  data() {
    return{
      currProd: 0
    }
  },

  computed: {
    ...mapGetters('product', ['PRODS']),
    doors() { return this.imgArr() }
  },

  methods: {
    ...mapActions('common', ['SET_MODAL']),
    close() { this.SET_MODAL(false) },

    imgArr() {
      const arts = this.PRODS[0].arts
      let arr = []
      for (const it in arts) {
        const unt = { art: '', src1: '', src2: '' }
        unt.art = 'Арт. ' + it.slice(1)
        unt.src1 = arts[it].src1.join(', ')
        unt.src2 = arts[it].src2.join(', ')
        arr.push(unt)
      }
      return arr
    },
    setSlider() {
      const main = this.$refs.main
      const setts = {
        navigation: {
            prevEl: this.$refs.btnL,
            nextEl: this.$refs.btnR,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true
        },
        grabCursor: true,
      }
      Object.assign(main, setts)
      main.initialize()
      this.setThumbs()
    },
    setThumbs() {
      const thumbs = this.$refs.thumbs
      const setts = {
        breakpoints: { 100: { spaceBetween: 12 }, 1440: { spaceBetween: 20 } },
        slidesPerView: 4,
        grabCursor: true,
      }
      Object.assign(thumbs, setts)
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
$pic-h-sm: min(630px, 80vh);
$pic-h-lg: min(607px, 80vh);
.slider {
  // border: 1px dotted rgb(18, 219, 7); // **tech
  // height: 100vh; // that's ok
  @include gpc;

  &__container {
    // border: 1px dotted rgb(41, 19, 26);  // **tech
    @include media('min', 'sm') { width: $w-sm; }
    @include media('min', 'lg') { width: 950px; }
    @include gpc;
    position: relative;
    z-index: 90;
    pointer-events: auto;
  }
  &__wrap {
    // border: 1px dotted rgb(219, 39, 7); // **tech
    height: min(100%, 95vh);
    @include media('min', 'sm') { width: $w-sm; }
    @include media('min', 'lg') { width: $w-lg; }
    position: relative;
    @include fc-sb-c;
    .door-show {
      flex: 1;
      // background-color: #c2d5db; // **tech
      @include media('min', 'sm') { width: $w-sm; max-height: $pic-h-sm; margin-bottom: auto; }
      @include media('min', 'lg') { width: $w-lg; max-height: $pic-h-lg; margin-bottom: 22px; }
      &__slide, .slide {

        @include fr-c-c;
        &__content, .content {
          @include media('min', 'sm') { max-height: $pic-h-sm; }
          @include media('min', 'lg') { max-height: $pic-h-lg; }
          &__art {
            position: absolute;
            width: fit-content;
            @include media('min', 'sm') { left: 8px; right: auto; top: 14px; }
            @include media('min', 'lg') { left: auto; right: 25px; top: 22px; }
          }
          &__pic {
            @include media('min', 'sm') { max-height: $pic-h-sm; }
            @include media('min', 'lg') { max-height: $pic-h-lg; }
          }
        }
      }
    }
    $thm-w-sm: min(65px, 40vh);
    $thm-h-sm: min(118px, 25vh);
    $thm-w-lg: min(107px, 40vh);
    $thm-h-lg: min(127px, 25vh);
    .door-thumbs {
      // background-color: #c2d5db; // ** tech
      // border: 1px solid lawngreen; // **tech
      @include media('min', 'sm') {
        width: calc( $w-sm - 30px );
        max-height: 118px;
        position: absolute;
        bottom: 20px;
      }
      @include media('min', 'lg') {
        top: 0;
        width: $w-lg; 
        max-height: 127px;
        position: relative;
      }
      &__pic {
        @include media('min', 'sm') { width: $thm-w-sm; height: $thm-h-sm; }
        @include media('min', 'lg') { width: $thm-w-lg; height: $thm-h-lg; }
        object-fit: cover;
      }
    }
  }
  &__nav, .nav{
    $nw: 35px;
    position: absolute;
    
    pointer-events: auto;
    @include media('min', 'sm') { display: none; }
    @include media('min', 'lg') { @include fr-sb-c; }
    top: calc(50% - 15px);
    // border: 1px dotted rgb(7, 120, 219); // tech
    // background-color: #a8a3a3;  // tech
    width: inherit;
    &__l { width: $nw; position: relative; z-index: 50; }
    &__r { width: $nw; position: relative; z-index: 50; }
  }
  &__close-wrap, .close {
    $btn-h: 25px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;   
    // background-color: rgb(207, 207, 207); // tech
    @include media('min', 'sm') { height: min( calc(100% - 22px), 90vh); right: 15px; }
    @include media('min', 'lg') { height: min( calc(100% + $btn-h + 8px), 90vh); right: 0; }
    &__btn {
      position: absolute;
      right: 0;
      width: $btn-h;
      position: absolute;
      @media (max-height: 850px) { position: fixed; right: 20px; top: 20px; }
      
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
.swiper-button-disabled {
  opacity: 0.5;
}
</style>
