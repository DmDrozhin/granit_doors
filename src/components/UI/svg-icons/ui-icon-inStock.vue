<template>
  <svg
    class="ui-icon-inStock"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 28 28" 
    preserveAspectRatio="xMinYMid meet"
    fill="none"
    display="flex"
    @mouseover="setHover()"
    @mouseout="unsetHover()"
  >
    <g filter="url(#filter0_d_126_114)">
      <circle cx="14" cy="14" :r="centerOfIcon" fill="#38AB52" />
    </g>
    <defs>
      <filter 
        id="filter0_d_126_114" 
        x="0" 
        y="0"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_126_114" />
        <feOffset />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.633333 0 0 0 0 1 0 0 0 0 0.714 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_126_114" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_126_114" result="shape" />
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'ui-icon-inStock',
  props: { },
  data() {
    return {
      isHover: false
    }
  },
  methods: {
    setHover() { this.isHover = true },
    unsetHover() { this.isHover = false }
  },
  computed: {
    centerOfIcon() { return this.isHover ? 5 : 3 }
  }

}
</script>

<style lang="scss" scoped>
</style>


