<template>
  <button class="ui-order-button-footer btn-ord-hd" @click="this.$emit('clicked')">
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
  </button>
</template>

<script>
import uiBaseOrderButton from '@/components/UI/ui-base-order-button.vue'
export default {
  name: 'ui-order-button-footer',
  components: { uiBaseOrderButton },
  data() {
    return{
      txt: 'Оставить заявку',
      baseSetts: { icnBg: '#D9D9D9', bg: '#fff' },
      iconSetts: { icnCol: '#137039' }
    }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.ui-order-button-footer, .btn-ord-hd {
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
    padding-left: 12px;
    // @include media('min', 'sm') { font-size: 0.75rem; padding-left: 5px; } // 12
    // @include media('min', 'lg') { font-size: 0.875rem; padding-left: 12px; } // 14
    color: #000;
  }

}
</style>