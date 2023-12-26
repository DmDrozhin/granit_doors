<template>
  <menuSection></menuSection>
  <header class="header">
    <div class="header__slider slider">
      <comp-carousel :go="sliderGo" @goTo="goToSlide($event)"></comp-carousel>
    </div>
    <div class="header__wrap">
      <div class="header__l l">
        <div class="l__titles titles">
          <h1 class="titles__t1">лучшие предложения <br/> на рынке дверей</h1>
          <p class="titles__t2">от известных производителей</p>
        </div>
        <div class="l__nav nav">
          <ui-nav-buttons
            class="nav__ui-comp"
            :goTo="goTo"
            @sliderEv="handleSlider($event)"
          ></ui-nav-buttons>
        </div>
      </div>

      <div class="header__r r">
        <div class="r__signs signs">
          <div>
            <ui-emblem-quality></ui-emblem-quality>
          </div>
          <div>
            <ui-emblem-guarantee></ui-emblem-guarantee>
          </div>
          <div>
            <ui-emblem-trust></ui-emblem-trust>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import menuSection from '@/components/comp-menu.vue'
import compCarousel from '@/components/comp-slider-header.vue'
export default {
  name: 'header-section',
  components: { menuSection, compCarousel },
  data() {
    return {
      title1: 'лучшие предложения на рынке дверей',
      title2: 'от известных производителей',
      sliderGo: {},
      goTo: ''
    }
  },
  // watch: {
  //   sliderGo(d) { console.log('watcher', d) }
  // },
  methods: {
    handleSlider(ev) { this.sliderGo = { go: ev, idx: Date.now() } },
    goToSlide(dir) {this.goTo = dir}
  },
}
</script>

<style lang="scss" scoped>
.header {
  margin: 14px 0 34px 0;
  @include header;
  @include container-width;
  overflow: hidden;
  position: relative;
  &__slider, .slider {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  &__wrap {
    // border: 1px dotted lawngreen;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(90deg, #585858 0%, rgba(0, 0, 0, 0.00) 95.46%);
    pointer-events: none;
    z-index: 1;
  }

  &__l, .l {
    // border: 1px solid orange;
    position: relative;
    @include fc-sb;
    width: 100%;
    @include media('min', 'sm') { margin: 26px 0 15px 15px; }
    @include media('min', 'lg') { margin: 49px 0 32px 92px; }
  
    &__titles, .titles {
      @include prev-slct;
      &__t1 {
        @include header-title;
        @include media('min', 'sm') { margin-bottom: 8px; }
        @include media('min', 'lg') { margin-bottom: -4px; }
      }
      &__t2 {
        @include header-sub-title;
        @include media('min', 'sm') { margin-bottom: 23px; line-height: 1.3; }
        @include media('min', 'lg') { margin-bottom: 0px; line-height: 1.3; }
      }
    }
    &__nav, .nav {      
      display: inline-block;
      width: fit-content;
      position: relative;
      z-index: 2;
      cursor: pointer;
      pointer-events: all;
      // outline: 1px solid indianred;
    }
  }

  &__r, .r {
    // border: 1px solid orange;
    @include media('min', 'sm') {}
    @include media('min', 'lg') { display: flex; align-items: flex-end; }
  }
  &__signs,
  .signs {
    // border: 1px solid orange;
    display: flex;
    @include media('min', 'sm') {
      flex-direction: column;
      gap: 5.7px;
      margin-top: 10px;
      margin-right: 14px;
    }
    @include media('min', 'lg') {
      flex-direction: row;
      gap: 2.1rem;
      margin-bottom: .75rem;
      margin-right: .75rem;
    }
  }
}
</style>

@include media('min', 'sm') {}
@include media('min', 'lg') {}
