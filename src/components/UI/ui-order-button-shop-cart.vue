<template>
  <div class="ui-order-button-shop-cart btn-shop-cart">
    <ui-base-order-button
    :setts="baseSetts"
    >
      <template #icon>
        <ui-icon-shop-cart
          :setts="iconSetts"
          class="btn-shop-cart__icon"
        ></ui-icon-shop-cart>
      </template>
      <template #txt>
        <p class="btn-shop-cart__txt" >{{ txt }}</p>
      </template>
    </ui-base-order-button>
  </div>
</template>

<script>
import uiBaseOrderButton from '@/components/UI/ui-base-order-button.vue'
export default {
  name: 'ui-order-button-shop-cart',
  components: { uiBaseOrderButton },
  data() {
    return{
      txt: 'Заказать',
      baseSetts: { icnBg: '#137039', bg: '#12AB51' },
      iconSetts: { icnCol: '#fff' }
    }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.ui-order-button-shop-cart, .btn-shop-cart {
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
    font-size: 0.875rem; // 14
    @include media('min', 'sm') { padding-left: 55px; }
    @include media('min', 'lg') { padding-left: 33px; }
    color: #fff;
  }

}
</style>