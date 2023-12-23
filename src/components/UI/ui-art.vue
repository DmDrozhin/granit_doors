<template>
  <div class="ui-art art">
    <div class="art__cont">
      {{ setts }}
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ui-art',
  props: { setts: { type: String, default: '' } },
  // props: { setts: { type: Object, default: () => {} } },
  data() {
    return{ }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
  .ui-art .art {
    &__cont {
      @include art;
      text-align: center;
      padding: 0 25px;
      background-color: $green-lt;
      border-radius: 13px;
      @include media('min', 'sm') { line-height: 50px; }
      @include media('min', 'lg') { line-height: 40px; }
    }
  }
</style>
