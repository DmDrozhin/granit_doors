<template class="ui-nav-buttons nav">
  <div class="nav__wrapper">
    <button ref="leftBtn" class="nav__L" :style="{ 'background-color': colorL }" @click="handleClick('L')">
      <div class="nav__icon-wrapper-L">
        <svg viewBox="200 100 1024 1024" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
          <g>
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#fff">
            </path>
          </g>
        </svg>
      </div>

    </button>
    <button ref="rightBtn" class="nav__R" :style="{ 'background-color': colorR }" @click="handleClick('R')">
      <div class="nav__icon-wrapper-R">
        <svg viewBox="-200 -100 1024 1024" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
          <g>
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#fff">
            </path>
          </g>
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ui-nav-buttons',
  props: {},
  data() {
    return {
      inFocus: '',
      colorL: '#137039',
      colorR: '#12AB51'
    }
  },
  watch: {
    inFocus(val) {
      if (val === 'R') {
        this.colorR = '#137039'
        this.colorL = '#12AB51'
      } else {
        this.colorL = '#137039'
        this.colorR = '#12AB51'
      }
    }
  },
  methods: {
    handleClick(ev) { 
      this.inFocus = ev 
      this.$emit('sliderEv', ev)
      console.log(ev)
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.ui-nav-buttons,
.nav {
  &__wrapper {
    // background-color: #efb6b6;
    display: flex;

    @include media('min', 'sm') { height: 29.18px; width: 62px; }
    @include media('min', 'lg') { height: 48px; width: 102px; }
  }
  &__L {
    width: 50%;
    height: inherit;
    border-radius: 28% 0 0 28%;
    background-color: #137039;
    position: relative;
  }

  &__icon-wrapper-L {
    position: relative;
    width: 53%;
    left: 15%;
    @include media('min', 'sm') { top: 3%; }
    @include media('min', 'lg') { top: 0%; }
  }

  &__R {
    width: 50%;
    height: inherit;
    border-radius: 0 28% 28% 0;
    background-color: #12AB51;
    position: relative;
  }

  &__icon-wrapper-R {
    position: relative;
    width: 53%;
    right: -15%;
    @include media('min', 'sm') { top: 3%; }
    @include media('min', 'lg') { top: 0%; }
  }

  @include media('min', 'sm') {}
  @include media('min', 'lg') {}

}
</style>
