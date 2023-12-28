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
        <swiper-container ref="swap2">
        </swiper-container>
      </div>

    </div>
  </div>
</template>

<!-- <script type="module"> -->
<script>
import { Pagination, Navigation, Scrollbar } from 'swiper/modules'
import { mapGetters } from 'vuex'

export default {
  name: 'comp-prod-slider',
  data() {
    return {
      currSlide: 0,
    }
  },
  computed: {
    ...mapGetters('product', ['prods']),

    crnt() { return this.prods[this.currSlide] }
  },

  methods: {
    // ...mapActions('product'),

    setSl() {
      const slider = this.$refs.swap1      
      // const scrollDrag = this.$refs.scrollDrag
      const setts = {
        modules: [ Pagination, Navigation, Scrollbar ],
        slidesPerView: 1,
        direction: 'vertical',
        // grabCursor: true,
        scrollbar: {
          hide: false,
          draggable: true,
          dragSize: 157,
        },
        injectStyles: [`
          .swiper-scrollbar-vertical {
            background-color: #F5F5F5;
            min-width: 6px;
            margin-right: 20px;
      
          }
          .swiper-scrollbar-drag {
            background-color: #C3C3C3;
          }
        `],
        // injectStylesUrls: ['../styles/swiper/setts.css']
      }
      Object.assign(slider, setts)
      slider.initialize()
    },

    setArts() {
      const control = this.$refs.swap2
      const setts = {
        slidesPerView: 8
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
  // background-color: #eaeee3;
  $w: calc(46px/2 + 134px*2 + 40px + 70px + 116px);
  // width: $w;
  height: 100%;
  width: 100%;
  &__wrap {
    padding-left: 20px;

  }

  &__swp-1,
  .swp-1 {

    // border: 1px solid rgb(152, 19, 19); // tech
    // width: 336px;
    &__title {
      color: #333;
      font-family: 'Futura PT 600';
      font-size: 1.8125rem;
      line-height: 1.3;
      margin-bottom: 20px;
    }

    &__slider {
      border: 1px solid rgb(205, 113, 92);

      $h: calc(286px + 17px + 63px);
      $w: calc(46px/2 + 134px*2 + 40px + 70px + 116px);
      height: $h;
      width: $w;      
    }

    &__slide,
    .content {
      border: 1px solid rgb(96, 92, 205);
      height: calc(286px + 11px + 63px);
      &__wrap {
        width: 329px;
        margin-left: 6px;
      }
      &__drs, .drs {
        display: flex;
        gap: 40px;
        margin-bottom: 11px;
        &__dr1,
        &__dr2 {
          $pic-w-sm: min(92px, 40vh);
          $pic-h-sm: min(195px, 25vh);
          $pic-w-lg: min(134px, 40vh);
          $pic-h-lg: min(286px, 25vh);
          img {
            @include media('min', 'sm') { width: $pic-w-sm; height: $pic-h-sm }
            @include media('min', 'lg') { width: $pic-w-lg; height: $pic-h-lg }
          }
        }
      }        
      &__desc {
        @include FT400-16;
        color: $grey-C3;
      }

    }
  }
  &__swp-2 {

  }
  // --swiper-scrollbar-border-radius: 10px;
  // --swiper-scrollbar-top: auto;
  // --swiper-scrollbar-bottom: 4px;
  // --swiper-scrollbar-left: auto;
  // --swiper-scrollbar-right: 4px;
  // --swiper-scrollbar-sides-offset: 1%;
  // --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  // --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);
  // --swiper-scrollbar-size: 4px;


}
</style>