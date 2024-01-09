<template>
  <button class="ui-button-filters btn">
    <div class="btn__wrap">
      <div class="btn__icon-wrap">
        <ui-icon-filter
          class="btn__icon"
          :setts="{ col: icon }"
        ></ui-icon-filter>
      </div>
      <p class="btn__txt">Фильтр моделей</p>
    </div>
  </button>
  
</template>

<script>
import uiIconFilter from '@/components/UI/svg-icons/ui-icon-filter.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ui-button-filters',
  components: { uiIconFilter, },
  data() {
    return{

    }
  },
  methods: { },
  computed: {
    ...mapGetters('common', ['DEVICE']),
    icon() { return this.DEVICE === 'desktop' ? '#C3C3C3' : '#FFF' }

  }

}
</script>

<style lang="scss" scoped>
.ui-button-filters, .btn {
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
</style>
