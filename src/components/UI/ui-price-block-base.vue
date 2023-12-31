<template>
  <div class="ui-price-block-base prc-block">
    <div class="prc-block__wrap">
      <div class="prc-block__sale">
        <slot name="sale"></slot>
      </div>
  
      <div class="prc-block__p1 p1">
        <div class="p1__price">
          <slot name="price"></slot>
        </div>
        <div class="p1__in-stock">
          <slot name="inStock"></slot>
        </div>
      </div>
  
      <div class="prc-block__p2 p2">
        <div class="p2__btn">
          <slot name="button"></slot>
        </div>
      </div>

    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ui-price-block-base',
  data() {
    return{

    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.ui-price-block-base, 
.prc-block {
  background-color: $grey-F5;
  @include fr-c-c;
  @include media('min', 'sm') { 
    width: 300px; 
    height: 132px; 
    border-radius: 19px;
    padding: 7px 12px 12px 12px;
  }
  @include media('min', 'lg') {
    width: 217px; 
    height: 297px;
    padding: 12px 12px 22px 14px;
    border-radius: 27px;
  }
  &__wrap {
    // border: 1px solid rgb(24, 43, 4); // tech
    position: relative;
    height: 100%;
    width: 100%;
    @include fc-sb;
    @include media('min', 'sm') { }
    @include media('min', 'lg') { }
  }
  &__sale {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;

  }
  &__p1, .p1 {
    // border: 1px solid lawngreen; // tech
    height: 100%;
    @include fc-sb;
    margin-top: 40px;
    margin-bottom: 18px;
    @include media('min', 'sm') { margin-top: 0px; margin-bottom: 6px; flex-direction: column-reverse; }
    @include media('min', 'lg') { margin-top: 40px; margin-bottom: 15px; flex-direction: column; }
    &__price {
      position: relative;
      @include media('min', 'sm') { }
      @include media('min', 'lg') { left: 6px; }
    }
    &__in-stock {
      position: relative;
      @include media('min', 'sm') { left: -8px; }
      @include media('min', 'lg') { left: -4px; }
    }
  }
  &__p2, .p2 {

  }

}


</style>