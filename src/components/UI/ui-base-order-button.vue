<template>
  <div class="ui-base-order-button btn" :style="{ 'background-color': setts.bg }">
    <div class="btn__wrapper">
      <div class="btn__side-l l">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 49 44"
          display="flex"
          preserveAspectRatio="xMidYMid meet" 
          fill="none">
          <path
            d="M0 12.96C0 8.32853 0 6.01279 0.929875 4.25656C1.68028 2.8393 2.8393 1.68028 4.25656 0.929875C6.01279 0 8.32853 0 12.96 0H34.0321C39.9224 0 42.8676 0 44.8396 1.26257C46.4234 2.27663 47.5994 3.81627 48.161 5.61114C48.8602 7.84588 48.0853 10.6873 46.5355 16.37L41.6045 34.45C40.6523 37.9415 40.1762 39.6872 39.1569 40.972C38.3311 42.013 37.259 42.8319 36.0374 43.3547C34.5297 44 32.7202 44 29.1012 44H12.96C8.32853 44 6.01279 44 4.25656 43.0701C2.8393 42.3197 1.68028 41.1607 0.929875 39.7434C0 37.9872 0 35.6715 0 31.04V12.96Z"
            :fill="setts.icnBg" />
        </svg>
          <slot name="icon"></slot>
      </div>

      <div class="btn__side-r r">
        <slot name="txt"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-base-order-button',
  props: { setts: { type: Object, default: () => {} } },
  data() {
    return { }
  },
  methods: {},
  computed: {},
}
</script>

<style lang="scss" scoped>
.ui-base-order-button,
.btn {
  $r: .5rem;
  $h: 44px;
  height: $h;
  border-radius: $r;
  width: 100%;

  &__wrapper {
    height: inherit;
    display: flex;
    align-items: center;
  }

  &__side-l, .l {
    flex: 0 0 49px;
    height: inherit;
    border-radius: $r 0 0 $r;
    position: relative;
  }

  &__side-r,
  .r {
    flex: 1;
    // border: 1px solid #7d78da; // tech
  }
  
}
</style>
