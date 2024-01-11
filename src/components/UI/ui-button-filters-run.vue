<template>
  <button 
    class="ui-button-filters-run btn-filters-run"
    @click="this.$emit('clicked')"
  >
    <ui-base-order-button :setts="baseSetts">
      <template #icon>
      </template>
      <template #txt>
        <p class="btn-filters-run__txt" >{{ txt }}</p>
      </template>
    </ui-base-order-button>
  </button>
</template>

<script>
import uiBaseOrderButton from '@/components/UI/ui-base-order-button.vue'
export default {
  name: 'ui-button-filters-run',
  components: { uiBaseOrderButton },
  data() {
    return{
      txt: 'Фильтровать',
      baseSetts: { icnBg: '#137039', bg: '#12AB51' },
      // iconSetts: { icnCol: '#fff' }
    }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.ui-button-filters-run, .btn-filters-run {
  display: flex;
  // &__icon {
    // $w: 22px;
    // $h-offset: 1px;
    // position: absolute;
    // width: $w;
    // top: calc(50% - $w / 2 - $h-offset);
    // left: 10px;
    // transform: rotate(-2deg);
    // border: 1px solid rgb(154, 139, 7); // tech
  // }
  &__txt {
    text-align: left;
    @include button-txt;
    font-size: 0.875rem; // 14
    @include media('min', 'sm') { padding-left: 26px; }
    @include media('min', 'lg') { padding-left: 14px; }
    color: #fff;
  }

}
</style>