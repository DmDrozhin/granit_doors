<template>
  <input 
    class="ui-input-text txt-inp"
    type="text"
    required
    :placeholder="setts.placeholder"
    :value="setts.val"
    @input="handleInp($event)"
  />
</template>

<script>
export default {
  name: 'ui-input-text',
  props: { setts: { type: Object, default: () => {} } },
  data() {
    return{

    }
  },
  methods: {
    handleInp(ev) { this.$emit('update:name', ev.target.value) }
  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.ui-input-text, 
.txt-inp {

}

</style>