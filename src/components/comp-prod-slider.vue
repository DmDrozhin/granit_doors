<template>
  <div class="comp-prod-slider prod">
    <div class="prod__wrap">
      <div class="prod__swp-1 swp-1">
        <div class="swp-1__title">
          {{ crnt.name }}
        </div>
        <swiper-container 
          class="swp-1__slider" 
          ref="swap1"
          init="false"
        >
          <swiper-slide 
            class="swp-1__slide content" 
            v-for="it in crnt.arts" 
            :key="it.id"
          >
            <div class="content__wrap">
              <div class="content__drs drs">
                <div class="drs__dr1">
                  <img :src="it.src1" alt="">
                </div>
                <div class="drs__dr2">
                  <img :src="it.src2" alt="">
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
            v-for="(it, idx) in artsArr"
            :key="idx"
          >
              <button class="slide__content content" @click="handleBtn(it)">
                <p class="content__txt">Арт. {{ it.slice(1) }}</p>
              </button>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>

<!-- <script type="module"> -->
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'comp-prod-slider',
  data() {
    return {
      currSlide: 0,
      currArticle: ''
    }
  },
  computed: {
    ...mapGetters('product', ['prods']),

    crnt() { return this.prods[this.currSlide] },
    artsArr() { return Object.keys(this.prods[this.currSlide].arts) }
  },

  methods: {
    // ...mapActions('product'),
    handleBtn(art) { this.currArticle = art },

    setSl() {
      const slider = this.$refs.swap1
      const setts = {
        slidesPerView: 1,
        grabCursor: true,
        thumbs: { swiper: this.$refs.swap2 },
        breakpoints: {
          100: {
            direction: 'horizontal',
          }, 
          1440: {
            direction: 'vertical',
          } 
        },
      }
      Object.assign(slider, setts)
      slider.initialize()
      this.setThumbs()
    },

    setThumbs() {
      const control = this.$refs.swap2
      const setts = {
        breakpoints: {
          100: {
            direction: 'horizontal',
            slidesPerView: 3.7,
            spaceBetween: 7,
            scrollbar: {
              dragSize: 118,
            },
          }, 
          1440: {
            direction: 'vertical',
            slidesPerView: 8,
            spaceBetween: 13,
            scrollbar: {
              dragSize: 157,
            },
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
    },
  },
  mounted() { this.setSl() }
}
</script>

<style lang="scss" scoped>
.comp-prod-slider,
.prod {
  // background-color: #eaeee3; // tech
  @mixin h-slider {
    @include media('min', 'sm') { height: calc(195px + 23px + 56px); }
    @include media('min', 'lg') { height: calc(282px + 11px + 63px); }
  }
  width: 100%;
  
  @include media('min', 'sm') { height: 399px; }
  @include media('min', 'lg') { height: 429px; } // height of entire prod block
  &__wrap {
    height: 100%;
    @include media('min', 'sm') { @include fc; padding-left: 0;}
    @include media('min', 'lg') { @include fr; padding-left: 28px; } // between filter and this block
  }

  &__swp-1,
  .swp-1 {
    // border: 1px solid rgb(152, 19, 19); // tech
    &__title {
      color: #333;
      font-family: 'Futura PT 600';
      line-height: 1.3;
      @include media('min', 'sm') { font-size: 1.4375rem; margin-bottom: 19px; } // 23
      @include media('min', 'lg') { font-size: 1.8125rem; margin-bottom: 19px; } // 29
    }

    &__slider {
      // border: 1px solid rgb(205, 113, 92); // tech
      @include h-slider;
    }

    &__slide,
    .content {
      // border: 1px solid #605ccd; // tech
      @include media('min', 'sm') { height: auto; }
      @include media('min', 'lg') { height: calc(286px + 11px + 63px); }
      &__wrap {
        @include media('min', 'sm') { margin-left: 0; width: 300px; }
        @include media('min', 'lg') { margin-left: 6px; width: 347px; }
      }
      &__drs, .drs {
        display: flex;
        @include media('min', 'sm') { margin-bottom: 20px; gap: 27px; justify-content: center; }
        @include media('min', 'lg') { margin-bottom: 11px; gap: 40px; justify-content: start; }

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
        @include media('min', 'sm') { text-align: center; padding: 0 6px; }
        @include media('min', 'lg') { text-align: left; padding: 0; }
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
          @include media('min', 'sm') { width: 78px; }
          @include media('min', 'lg') { width: 116px; }
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