<template>
  <button 
    class="ui-button-main btn" 
    :style="{ 'background-color': setts.bg }" 
    ref="btn"

  >
    <div class="btn__wrapper" @resize="handle(e)">
      <div class="btn__side-l l">
        <div class="l__svg-bg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 44" preserveAspectRatio="xMidYMid meet" fill="none">
            <path
              d="M0 12.96C0 8.32853 0 6.01279 0.929875 4.25656C1.68028 2.8393 2.8393 1.68028 4.25656 0.929875C6.01279 0 8.32853 0 12.96 0H34.0321C39.9224 0 42.8676 0 44.8396 1.26257C46.4234 2.27663 47.5994 3.81627 48.161 5.61114C48.8602 7.84588 48.0853 10.6873 46.5355 16.37L41.6045 34.45C40.6523 37.9415 40.1762 39.6872 39.1569 40.972C38.3311 42.013 37.259 42.8319 36.0374 43.3547C34.5297 44 32.7202 44 29.1012 44H12.96C8.32853 44 6.01279 44 4.25656 43.0701C2.8393 42.3197 1.68028 41.1607 0.929875 39.7434C0 37.9872 0 35.6715 0 31.04V12.96Z"
              :fill="setts.icnBg" />
          </svg>
        </div>
        <div class="l__svg-phone" v-if="setts.icn === 'phone'">
          <svg viewBox="0 0 22 24" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.42444 10.1948C6.18444 13.8984 9.02 16.9215 12.4789 18.8191L15.1678 15.94C15.4978 15.5866 15.9867 15.4688 16.4144 15.6259C17.7833 16.1101 19.2622 16.3718 20.7778 16.3718C21.45 16.3718 22 16.9608 22 17.6805V22.2479C22 22.9677 21.45 23.5566 20.7778 23.5566C9.30111 23.5566 0 13.5974 0 1.3087C0 0.588915 0.55 0 1.22222 0H5.5C6.17222 0 6.72222 0.588915 6.72222 1.3087C6.72222 2.94458 6.96667 4.51502 7.41889 5.98076C7.55333 6.43881 7.45555 6.9492 7.11333 7.31563L4.42444 10.1948Z"
              :fill="setts.icnCl" />
          </svg>
        </div>
      </div>
      <div class="btn__side-r r">
        <div class="r__txt">
          <p :style="{ color: setts.txtCl, 'font-size': fz, 'text-align': al }">{{ setts.txt }}
          </p>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ui-button-main',
  props: { setts: { type: Object } },
  data() {
    return {
      w: 0
    }
  },
  methods: {
    setW() { this.w = this.$refs.btn.offsetWidth }
  },
  computed: {
    ...mapGetters('common', ['scrw']),
    al() { return this.w <= 120 ? 'left' : 'center' },
    fz() { return this.w <= 120 ? '12px' : '14px' },
  },
  watch: {
    scrw(wn, wo) {
      if (wn > 1440 && wo < 1440) this.setW()
      else if (wn < 1440 && wo > 1440) this.setW()
    }
  },
  mounted() {
    this.setW()
  }
}
</script>

<style lang="scss" scoped>
.ui-button-main,
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
  &__side-l,
  .l {
    flex: 0 0 49px;
    height: inherit;
    border-radius: $r 0 0 $r;
    position: relative;
    // &__svg-bg {}
    &__svg-phone {
      position: absolute;
      width: 45%;
      top: 25%;
      left: 22%;
      transform: rotate(-2deg);
      // border: 1px solid rgb(154, 139, 7); // tech
    }
  }
  &__side-r,
  .r {
    flex: 1;
    // border: 1px solid #7d78da; // tech
    &__txt {
      & p {
        @include media('min', 'sm') { padding-left: 5px; }
        @include media('min', 'lg') { padding-left: 0px; }
        @include button-txt;
      }
    }
  }
}
</style>