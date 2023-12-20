<template>
  <div class="comp-info info">
    <div class="info__wrapper">
      <div class="info__l l">
        <ui-icon-phone v-if="setts.icn === 'phone'"
          :setts="{ bg: setts.icnBg, icn: setts.icnCl }"
        ></ui-icon-phone>
        <ui-icon-email v-if="setts.icn === 'email'"
          :setts="{ bg: setts.icnBg, icn: setts.icnCl }"
        ></ui-icon-email>
      </div>
      <div class="info__r r" :style="{ 'color': setts.txtCl }">
          {{ setts.txt }}
      </div>
    </div>
  </div>
</template>

<script>
// API
// setts: {
// txt: 'some info',
// icon: 'icon name'
//}
export default {
  name: 'ui-comp-info',
  props: {
    setts: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop 
      default: {
        txt: 'some info',
        txtCl: '#000',
        icn: 'phone',
        icnCl: '#fff',
        icnBg: '#137039'
      }
    }
  },
  data() {
    return{ }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
  .comp-info
  .info {
    $h: 30px;
    height: $h;
    &__wrapper {
      height: inherit;
      display: flex;
      align-items: center;
    }
    &__l,
    .l {
      height: $h;
      width: $h;
      margin-right: 11px;
    }
    &__r, 
    .r {
      @include contact;
    }
  }

</style>