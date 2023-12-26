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
      background-color: $green-lt;
      border-radius: min(13px, 1.5vh);
      padding: min(10px, 1.5vh) min(25px, 4.5vh);
    }
  }
</style>
