<template>
  <div class="ui-price price">
    <div class="price__sale">
      {{ salePrice }}
    </div>
    <div class="price__net">
      {{ netPrice }}
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ui-price',
  data() {
    return{
      price: 27134,
      sale: 0.5
    }
  },
  methods: {
    toCurrency(num) {
      return new Intl.NumberFormat('uk-UA', { 
        style: 'currency', 
        currency: 'UAH', 
        maximumFractionDigits: 0
      }).format(num)
    }
  },
  computed: {
    salePrice() { return this.toCurrency(this.price * this.sale) },
    netPrice() { return this.toCurrency(this.price) }
  }

}
</script>

<style lang="scss" scoped>
.ui-price, .price {
  @include media('min', 'sm') { @include fr-st-c; gap: 7px; }
  @include media('min', 'lg') { @include fc-st-st; gap: 9px; }
  &__sale {
    font-family: 'Futura PT 600';
    color: $dark-33;
    @include media('min', 'sm') { font-size: 1.8125rem; } // 29
    @include media('min', 'lg') { font-size: 2.25rem; } // 36
  }
  &__net {
    font-family: 'Futura PT 400';
    text-decoration: line-through;
    color: $grey-b1;
    @include media('min', 'sm') { font-size: 1.5625rem; } // 25
    @include media('min', 'lg') { font-size: 1.875rem; } // 30
  }

}

</style>