<template>
  <div class="ui-sale-star sale-star">
    <div class="sale-star__icon">
      <ui-icon-sale></ui-icon-sale>
    </div>
    <div class="sale-star__txt-wrap">
      <p class="sale-star__txt">-{{ sale }}%</p>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'ui-sale-star',
  data() {
    return{
      sale: 50
    }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.ui-sale-star, .sale-star {
  $sz: 42px;
  width: $sz;
  height: $sz;
  position: relative;
  &__icon {
    display: flex;
  }
  &__txt-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    @include fr-c-c;

  }
  &__txt {
    @include FT600-12;
    position: relative;
    top: 2px;
  }
}


</style>