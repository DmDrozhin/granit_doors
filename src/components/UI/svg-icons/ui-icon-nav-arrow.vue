<template>
  <svg 
    viewBox="0 0 1024 1024" 
    xmlns="http://www.w3.org/2000/svg" 
    :transform="`rotate(${rotate})`"
    display="flex"
    background-color="#000"
    class="ui-icon-nav-arrow"
  >
    <g>
      <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" :fill="color">
      </path>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'ui-icon-nav-arrow',
  props: {
    setts: { type: Object, default: () => {} }
  },
  data() {
    return {
    }
  },
  methods: { },
  computed: { 
    rotate() { return !this.setts ? 90 : this.setts.rot },
    color() { return this.setts === undefined ? '#fff' : this.setts.col }
  }
}
</script>

<style lang="scss" scoped>
  .ui-icon-nav-arrow {
    position: relative;
    z-index: -1;
  }
</style>
