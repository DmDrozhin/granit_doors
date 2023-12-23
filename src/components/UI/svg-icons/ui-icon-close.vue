<template>
  <svg 
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg" 
    display="flex"
  >
    <path d="M20 1L1 20M1.00001 1L20 20" 
      :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    </path>
  </svg>
</template>

<script>
export default {
  name: 'ui-icon-close',
  props: {
    setts: { type: Object, default: () => {} }
  },
  data() {
    return {
    }
  },
  methods: { },
  computed: {
    color() { return this.setts === undefined ? '#fff' : this.setts.col }
  }
}
</script>

<style lang="scss" scoped>
</style>
