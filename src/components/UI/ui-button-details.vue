<template>
  <button class="ui-button-details details" @click="clicked">
    <p class="details__txt">Характеристика</p>
    <div class="details__icon">
      <ui-icon-nav-arrow
        :setts="{ rot: direction, col: '#333333' }"
      ></ui-icon-nav-arrow>
    </div>
  </button>
  
</template>

<script>
import uiIconNavArrow from './svg-icons/ui-icon-nav-arrow.vue'
export default {
  components: { uiIconNavArrow },
  name: 'ui-button-details',
  data() {
    return{
      isRolled: false
    }
  },
  methods: {
    clicked() { 
      this.isRolled = !this.isRolled 
      this.$emit('toRoll')
    }
  },
  computed: {
    direction() { return this.isRolled ? -90 : 90 }
  }

}
</script>

<style lang="scss" scoped>
.ui-button-details, .details {
  display: inline-block;
  width: fit-content;
  @include fr-st-c;
  @include media('min', 'sm') { pointer-events: all; }
  @include media('min', 'lg') { pointer-events: none; }
  // border: 1px solid lightblue; // tech

  &__txt {
    font-family: 'Futura PT 600';
    line-height: 1.3;
    text-decoration: underline;
    @include media('min', 'sm') { font-size: 1rem; pointer-events: all; } // 16
    @include media('min', 'lg') { font-size: 1.125rem; pointer-events: none; } // 18
    margin-right: 6px;
  }
  &__icon {
    width: 15px;
    @include media('min', 'sm') { display: block; }
    @include media('min', 'lg') { display: none; }
  }
}
</style>
