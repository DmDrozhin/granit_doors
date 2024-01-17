<template>
  <div class="comp-prod-slider prod">

    <div class="prod__wrap">
      <div class="prod__swp-1 swp-1">
        <h2 class="swp-1__title">
          {{ prod.name }}
        </h2>
        <swiper-container 
          class="swp-1__slider" 
          ref="swap1"
          init="false"
        >
          <swiper-slide 
            class="swp-1__slide content" 
            v-for="(it, idx) in prod.arts"
            :key="idx"
          >
            <div class="content__wrap">
              <div class="content__drs drs">
                <div class="drs__dr1">
                  <img 
                    :src="it.src1" 
                    :alt="`Наружная сторона. ${prod.name} Арт.${it.art.slice(1)}`"
                    @error="$event.target.src = altImg"
                  >
                </div>
                <div class="drs__dr2">
                  <img 
                    :src="it.src2" 
                    :alt="`Внутренняя сторона. ${prod.name} Арт.${it.art.slice(1)}`"
                    @error="$event.target.src = altImg"
                  >
                </div>
              </div>
              <div class="content__desc">
                {{ it.desc2 }}
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>

      <div class="prod__swp2 swp-2">
        <swiper-container 
          class="swp-2__slider slider"
          ref="swap2"
          init="false"
        >
          <swiper-slide
            class="slider__slide slide"
            v-for="(it, idx) in prod.arts"
            :key="idx"
          >
            <button class="slide__content content">
              <p class="content__txt">Арт. {{ it.art.slice(1) }}</p>
            </button>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'comp-prod-slider',
  props: {
    doorId: { type: Number, default: undefined },
    prod: { type: Object, default: () => {} } 
  },
  data() {
    return {
      currSlide: '',
      altImg: require('@/assets/images/door/placeholder.webp')
    }
  },
  watch: {
    getCurrSlide(sl) {
      if (sl.doorId === this.doorId ) this.$refs.swap1.swiper.slideTo(sl.currArtId, 300, false)
    }
  },
  computed: {
    ...mapGetters('product', ['SLIDE_INFO', 'FILTERED']),
    theDoor() { return this.FILTERED[this.doorId].arts },
    getCurrSlide() { return this.SLIDE_INFO(this.doorId) },
  },

  methods: {
    ...mapActions('product', ['SET_CURR_SLIDE']),

    handler(idx) {
      const d = {
        doorId: this.doorId,
        currArtId: idx,
        currArt: this.prod.arts[idx].art,
        currRal: this.prod.arts[idx].col1
      }
      this.SET_CURR_SLIDE(d)
    },

    setSl() {
      const slider = this.$refs.swap1
      const setts = {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        thumbs: { swiper: this.$refs.swap2 },
        breakpoints: {
          100: { direction: 'horizontal' }, 
          1440: { direction: 'vertical' } 
        },
        on: { slideChangeTransitionEnd: (ev) => {
            // console.log(ev)
            this.handler(ev.activeIndex)
            // this.currSlide = ev.activeIndex
          }
        }
        
      }
      Object.assign(slider, setts)
      slider.initialize()
      this.setThumbs()
    },

    setThumbs() {
      const control = this.$refs.swap2
      const setts = {
        observer: true,
        observeParents: true,
        breakpoints: {
          100: {
            direction: 'horizontal',
            slidesPerView: 3.7,
            spaceBetween: 7,
            scrollbar: {
              dragSize: 118,
            }
          }, 
          1440: {
            direction: 'vertical',
            slidesPerView: 8,
            spaceBetween: 13,
            scrollbar: {
              dragSize: 157,
            }
          }
        },
        scrollbar: {
          hide: false,
          draggable: true
        },        
        injectStyles: [` .swiper-scrollbar-drag { background-color: #C3C3C3; } `],
        mousewheel: {
          eventsTarget: '.swp-2__slider',
          thresholdTime: 100,
          forceToAxis: true
        },
      }
      Object.assign(control, setts)
      control.initialize()

    }
  },

  mounted() {
    this.setSl()
    this.handler(0)
    // this.$refs.swap1.swiper.slideTo(2, 300, false)
  }
}
</script>

<style lang="scss" scoped>
.comp-prod-slider,
.prod {
  // background-color: #eaeee3; // tech
  width: 100%;
  @include media('min', 'sm') { height: 399px; }
  @include media('min', 'lg') { height: 429px; } // height of entire prod block
  &__wrap {
    position: relative;
    height: 100%;
    @include media('min', 'sm') { @include fc; }
    @include media('min', 'lg') { @include fr; }
  }

  &__swp-1,
  .swp-1 {
    // border: 1px solid rgb(152, 19, 19); // tech
    &__title {
      color: #333;
      font-family: 'Futura PT 600';
      line-height: 1.3;
      @include media('min', 'sm') { font-size: 1.4375rem; margin-bottom: 19px; } // 23
      @include media('min', 'lg') { font-size: 1.8125rem; margin-bottom: 17px; } // 29
    }

    &__slider {
      // border: 1px solid rgb(205, 113, 92); // tec
      @include media('min', 'sm') { height: calc(195px + 23px + 56px); }
      @include media('min', 'lg') { height: calc(282px + 15px + 66px); }
    }

    &__slide,
    .content {
      // border: 1px solid #605ccd; // tech
      @include media('min', 'sm') { height: auto; }
      @include media('min', 'lg') { height: calc(286px + 15px + 63px); }

      &__wrap {
        @include media('min', 'sm') { margin-left: 0; width: 300px; }
        @include media('min', 'lg') { margin-left: 6px; width: 347px; }
      }
      &__drs, .drs {
        display: flex;
        @include media('min', 'sm') { margin-bottom: 20px; gap: 27px; justify-content: center; }
        @include media('min', 'lg') { margin-bottom: 16px; gap: 40px; justify-content: start; }

        &__dr1,
        &__dr2 {
          $pic-w-sm: min(92px, 40vh);
          $pic-h-sm: min(193px, 25vh);
          $pic-w-lg: min(134px, 40vh);
          $pic-h-lg: min(282px, 25vh);
          img {
            @include media('min', 'sm') { width: $pic-w-sm; height: $pic-h-sm }
            @include media('min', 'lg') { width: $pic-w-lg; height: $pic-h-lg }
          }
        }
      }        
      &__desc {
        @include FT400-16-14;
        color: $grey-C3;
        @include media('min', 'sm') { text-align: center; padding: 0 5px; }
        @include media('min', 'lg') { text-align: left; padding: 0 7px 0 0; }
      }
    }
  }
  &__swp-2, .swp-2 {
    &__slider, .slider {
      // @include h;
      height: 100%;
      @include media('min', 'sm') { width: 310px; margin-top: 15px; padding-bottom: 0; }
      @include media('min', 'lg') { width: 100%; margin-top: 6px; padding-bottom: 17px; }
      &__slide, .slide {
        
        @include media('min', 'sm') { margin-left: 0; margin-bottom: 5px; }
        @include media('min', 'lg') { margin-left: 32px; margin-bottom: 0; }

        &.swiper-slide-thumb-active .content {
          background-color: $green-lt;
          &__txt { color: $light; }
        }
        &__content, .content {
          height: 40px;
          border-radius: 13px;
          @include media('min', 'sm') { width: 78px; margin-bottom: 5px; }
          @include media('min', 'lg') { width: 116px; margin-bottom: 0px; }
          background-color: $grey-F5;
          &__txt {
            @include FT400-16-14;
            color: $grey-60;
          }
        }
      }
    }
  }
  // There are following CSS parts are available for styling:
  // https://swiperjs.com/element#parts
  swiper-container::part(scrollbar) {
    background-color: #F5F5F5;
    @include media('min', 'sm') { width: 300px; height: 6px; top: auto; }
    @include media('min', 'lg') { width: 6px; height: 405px; top: 0; }
    left: 0;
  }
}
</style>