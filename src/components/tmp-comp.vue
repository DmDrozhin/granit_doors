<template>
  <div class="tmp-c">
    <div class="tmp-c__div"></div>
  </div>
  
</template>

<script>

export default {
  name: 'tmp-c',
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
.tmp-c {
  &__div {
    width: 100px;
    height: 50px;
    background-color: $green-lt;
    position: relative;
    &::after {
      content: '>';
      position: absolute;
      font-size: 25px;
      line-height: 40px;
      left: 5px;
      top: 3px;
      z-index: 10;
      color: #fff;
      font-size: 16px;
    }
  }

}

</style>