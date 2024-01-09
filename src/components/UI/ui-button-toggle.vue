<template>
  <div class="ui-button-toggle toggle">
    <input 
      class="toggle__btn"
      :class="{ 'btn-off': !isChanged }"
      type="button" 
      :name="setts.name"
      :id="setts.val"
      @click="toggle()"
    >
    <div 
      class="toggle__ball"
      :class="{ 'ball-off': !isChanged }"
    >
    </div>
  </div>
</template>

<script>
// :setts="{ name: 'purposes', val: SETTS.ads.mirr, isOn: undefined }"
export default {
  name: 'ui-button-toggle',
  props: { setts: { type: Object, default: () => {} } },
  data() {
    return {
      isChanged: false
    }
  },
  watch: {
    setts(v) { this.isChanged = v.isOn },
  },
  methods: {
    toggle() { 
      this.isChanged = !this.isChanged
      this.$emit('toggled', this.isChanged)
    }
  },
  computed: {
  }

}
</script>

<style lang="scss" scoped>
.ui-button-toggle,
.toggle {
  @include fr-sb-c;
  position: relative;
  &__btn {
    width: 39px;
    height: 22px;
    border-radius: 23px;
    background-color: $green-dk;
  }
  &__ball {
    position: absolute;
    right: 3px;
    left: auto;
    width: 18px;
    height: 18px;
    background-color: $light;
    border-radius: 50%;
    pointer-events: none;
  }
  .btn-off { background-color: $grey-C3; }
  .ball-off { left: 3px; right: auto; }
}
</style>
