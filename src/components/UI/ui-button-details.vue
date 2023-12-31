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
    direction() { return this.isRolled ? 90 : -90 }
  }

}
</script>

<style lang="scss" scoped>
.ui-button-details, .details {
  @include fr-st-c;
  &__txt {
    font-family: 'Futura PT 600';
    line-height: 1.3;
    text-decoration: underline;
    @include media('min', 'sm') { font-size: 1rem; } // 16
    @include media('min', 'lg') { font-size: 1.125rem; } // 18
    margin-right: 6px;
  }
  &__icon {
    width: 15px;
  }

}


</style>