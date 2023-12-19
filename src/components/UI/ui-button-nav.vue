<template>
  <button
    ref="btn" 
    class="ui-button-nav nav-btn"
    @focus="toggleFocus"
    @blur="toggleFocus"
    @click="handleClick"
    :style="{ 'background-color': bgColor, 'border-radius': btnDirection }"
  >
    <ui-icon-nav-arrow
      class="nav-btn__icon"
      :style="{ 'transform': `rotate(${arrDirection}deg)` }"
    ></ui-icon-nav-arrow>
  </button>
  
</template>

<script>

export default {
  name: 'ui-button-nav',
  props: {
    setts: { type: Object, default: () => {} }
  },
  data() {
    return{
      inFocus: false,
      isRight: true
    }
  },
  methods: {
    toggleFocus() { this.inFocus = !this.inFocus },
    handleClick(ev) { console.log('clicked', ev) }
  },
  computed: {
    bgColor() { return this.inFocus ? '#137039' : '#12AB51' },
    btnDirection() { return this.setts.isRight ? '0 17px 17px 0' : '17px 0 0 17px' },
    arrDirection() { return this.setts.isRight ? 180 : 0 }
    
  },
  mounted() { if(this.setts.isRight) this.$refs.btn.focus() }
}
</script>

<style lang="scss" scoped>
.ui-button-nav, 
.nav-btn {

  @include media('min', 'sm') {
    width: 31px;
    height: 29px;
  }
  @include media('min', 'lg') {
    width: 51px;
    height: 48px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  &__icon {

  }
}

</style>