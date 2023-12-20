<template>
  <div class="comp-filer-select select-block">
    <div class="select-block__wrapper">
      <select class="select-block__inp">
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
  name: 'comp-filter-select',
  props: {
    options: {
      type: Array, default: () => [
        'По убыванию цены',
        'По возрастанию цены',
        'По количеству предложений',
        'По популярности',
      ]
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.comp-filer-select,
.select-block {
  // margin-left: auto;
  
  &__wrapper {

    position: relative;
    border: 1px solid greenyellow;
    display: flex;
    @include media('min', 'sm') {
      margin-top: 20px;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
    @include media('min', 'lg') {
      margin-top: 26px;
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