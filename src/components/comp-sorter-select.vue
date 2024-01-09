<template>
  <div class="comp-sorter-select select-block">
    <div class="select-block__wrapper">
      <select class="select-block__inp" v-model="sortBy">
        <option 
          class="select-block__option" 
          v-for="(option, idx) in options"
          :key="idx" 
          :value="option">{{ option }}
        </option>
      </select>
      <div class="select-block__svg">
        <img src="../assets/svg/select-filter.svg" alt="filter icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comp-sorter-select',
  data() {
    return {
      sortBy: ''
    }
  },
  watch: {
    sortBy(v) { this.$store.dispatch('product/SET_PROD_SORTER', v) },
  },
  methods: {},
  computed: {
    options () { return this.$store.state.product.setts.fltr }
  },
  mounted() {
    this.sortBy = this.options[3]
  },

}
</script>

<style lang="scss" scoped>
.comp-sorter-select,
.select-block {
  // margin-left: auto;
  &__wrapper {
    position: relative;
    // border: 1px solid greenyellow;
    display: flex;
    @include media('min', 'sm') {
      // margin-top: 20px;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
    @include media('min', 'lg') {
      // margin-top: 26px;
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  &__inp {
    // display: block;
    width: 210px;
    height: 30px;
    padding-left: 5px;
    padding-right: 30px;
    text-overflow: ellipsis;
    @include media('min', 'sm') {
      margin-left: 30px;
    }
    @include media('min', 'lg') {
      margin-left: 0px;
    }
  }
  &__svg {
    position: absolute;
    top: 4px;
    width: 26px;
    height: 24px;
    z-index: -1;
    @include media('min', 'sm') {
      left: 0;
      right: auto;
    }
    @include media('min', 'lg') {
      right: 0;
      left: auto;
    }
  }
}
</style>