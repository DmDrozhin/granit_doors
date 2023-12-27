<template>
  <button 
    class="ui-button-base base"
    @click="this.$emit('clicked')"
  >
    <div class= "base__wrapper">
      <div class= "base__icon">
        <slot name="icon"></slot>
      </div>
      <div class="base__txt">
        <slot name="txt"></slot>
      </div>
    </div>
  </button>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'ui-button-base',
  data() { },
  methods: { },
  computed: {
    // ...mapGetters('common', ['scrw']),
  },
  watch: { },

  mounted() { }
}
</script>

<style lang="scss" scoped>
.ui-button-base,
.base {
  $r: 10px;
  $h: 43px;
  height: $h;
  border-radius: $r;
  width: 100%;
  background-color: $grey-90;
  @include media('min', 'sm') { padding: 0 8px; }
  @include media('min', 'lg') { padding: 0 14px; }
  &__wrapper {
    width: fit-content;
    height: inherit;
    @include fr-c-c;
  }
  &__icon {
    // width: 19px;
    margin-right: 10px;
    @include media('min', 'sm') { margin-right: 5px; }
    @include media('min', 'lg') { margin-right: 10px; }
  }
  &__txt { }
}
</style>
