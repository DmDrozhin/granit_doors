<template>
  <button class="ui-button-filters filters-btn" @click="handleClick" :class="{'grey-bg': isRolled }">
    <div class="filters-btn__wrap">
      <div class="filters-btn__icon-wrap">
        <ui-icon-filter
          class="filters-btn__icon"
          :setts="{ col: icon }"
        ></ui-icon-filter>
      </div>
      <p class="filters-btn__txt">Фильтр моделей</p>
    </div>
  </button>
  
</template>

<script>
import uiIconFilter from '@/components/UI/svg-icons/ui-icon-filter.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ui-button-filters',
  components: { uiIconFilter, },
  props: { isRolled: { type: Boolean, default: false } },
  data() {
    return{ }
  },
  methods: {
    handleClick() {
      if (!this.isDesktop) this.$emit('titleButtonClick')
    }
  },
  computed: {
    ...mapGetters('common', ['DEVICE']),
    isDesktop() { return this.DEVICE === 'desktop'},
    icon() { return this.isDesktop ? '#C3C3C3' : '#FFF' },
  }
}
</script>

<style lang="scss" scoped>
.ui-button-filters, 
.filters-btn {
  width: 100%;
  height: 49px;
  border-radius: 6px;
  // @include fr-c-c;
  @include media('min', 'sm') {
    background-color: $green-lt; 
    pointer-events: all; 
  }
  @include media('min', 'lg') {
    background-color: transparent;
    pointer-events: none; 
  }

  &__wrap {
    @include media('min', 'sm') { @include fr-c-c; }
    @include media('min', 'lg') { @include fr-st-c; }
  }
  &__icon-wrap {
    width: 21px;
    margin-right: 18px;

  }
  &__icon {

  }
  &__txt {
    @include FT600-18;
    @include media('min', 'sm') { color: $light; }
    @include media('min', 'lg') { color: $dark-33; }
  }
}
.grey-bg {
  @include media('min', 'sm') { background-color: $grey-58; }
  @include media('min', 'lg') { background-color: transparent; }
}
</style>
