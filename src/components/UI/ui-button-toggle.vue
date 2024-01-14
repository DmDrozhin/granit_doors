<template>
  <div class="ui-button-toggle toggling-button">
    <input 
      class="toggling-button__btn-input"
      :class="{ 'btn-off': !isChanged }"
      type="button" 
      :name="setts.name"
      :id="setts.val"
      @click="toggle()"
    >
    <div 
      class="toggling-button__btn-ball"
      :class="{ 'ball-off': !isChanged }"
    >
    </div>
  </div>
</template>

<script>
// :setts="{ name: 'purposes', val: SETTS.ads.mirr, isOn: undefined }"
export default {
  name: 'ui-button-toggle',
  props: { setts: { type: Object, default: () => {} }, isOn: { type: Boolean, default: false } },
  data() {
    return {
      isChanged: false
    }
  },
  watch: {
    isOn(v) { this.isChanged = v },
  },
  methods: {
    toggle() { 
      this.isChanged = !this.isChanged
      this.$emit('update:isOn', this.isChanged)
    }
  },
  computed: {
  }

}
</script>

<style lang="scss" scoped>
.ui-button-toggle,
.toggling-button {
  @include fr-sb-c;
  position: relative;
  &__btn-input {
    width: 39px;
    height: 22px;
    border-radius: 23px;
    background-color: $green-dk;
    @include media('min', 'sm') { width: 58px; height: 33px; }
    @include media('min', 'lg') { width: 39px; height: 22px; }
  }
  &__btn-ball {
    position: absolute;
    right: 3px;
    left: auto;
    background-color: $light;
    border-radius: 50%;
    pointer-events: none;
    @include media('min', 'sm') { width: 27px; height: 27px; }
    @include media('min', 'lg') { width: 18px; height: 18px; }
  }
  .btn-off { background-color: $grey-C3; }
  .ball-off { left: 3px; right: auto; }
}
</style>
