<template>
  <div class="ui-order-button-head btn-ord-hd">
    <ui-base-order-button
    :setts="baseSetts"
    >
      <template #icon>
        <ui-icon-phone-lg
          :setts="iconSetts"
          class="btn-ord-hd__icon"
        ></ui-icon-phone-lg>
      </template>
      <template #txt>
        <p class="btn-ord-hd__txt" >{{ txt }}</p>
      </template>
    </ui-base-order-button>
  </div>
</template>

<script>
import uiBaseOrderButton from '@/components/UI/ui-base-order-button.vue'
export default {
  name: 'ui-order-button-head',
  components: { uiBaseOrderButton },
  data() {
    return{
      txt: 'Оставить заявку',
      baseSetts: { icnBg: '#137039', bg: '#12AB51' },
      iconSetts: { icnCol: '#fff' }
    }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.ui-order-button-head, .btn-ord-hd {
  display: flex;
  &__icon {
    $w: 22px;
    $h-offset: 1px;
    position: absolute;
    width: $w;
    top: calc(50% - $w / 2 - $h-offset);
    left: 10px;
    transform: rotate(-2deg);
    // border: 1px solid rgb(154, 139, 7); // tech
  }
  &__txt {
    text-align: left;
    @include button-txt;
    @include media('min', 'sm') { font-size: 0.75rem; padding-left: 5px; } // 12
    @include media('min', 'lg') { font-size: 0.875rem; padding-left: 12px; } // 14
    color: #fff;
  }

}
</style>