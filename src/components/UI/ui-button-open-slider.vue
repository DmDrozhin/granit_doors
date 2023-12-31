<template>
  <button class="ui-button-open-slider btn">
    <p class="btn__txt">Посмотреть фото</p>
  </button>
  
</template>

<script>
export default {
  name: 'ui-button-open-slider',
  data() {
    return{
    }
  },
  methods: { },
  computed: { }

}
</script>

<style lang="scss" scoped>
.ui-button-open-slider, .btn {
  width: 151px;
  height: 38px;
  background-color: $green-dk;
  border-radius: 10px;
  @include fr-c-c;
  &__txt {
    @include FT450-14;
    color: $light;
  }
}
</style>
