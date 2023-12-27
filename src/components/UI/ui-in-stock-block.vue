<template>
  <div class="ui-in-stock-block stock">
    <div class="stock__icon">
      <ui-icon-inStock></ui-icon-inStock>
    </div>
    <div class="stock__txt">
      В наличии {{ qt }} шт.
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'ui-in-stock-block',
  data() {
    return{
      qt: 526
    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.ui-in-stock-block, .stock {
  display: flex;
  align-items: center;
  &__icon {
    width: 25px;
    margin-right: 3px;
  }
  &__txt {
    @include FT400-16;
    color: $grey-63;
  }
}

</style>

