<template>
  <div class="comp-prod-info info">
    <!-- <prod info content -->
    <div class="info__wrap">
      <div class="info__sec1 sec1">
        <div class="sec1__btn btn">

          <ui-button-details
            class="btn__ui-details"
            @toRoll="toRollOut"
          ></ui-button-details>

          <div class="btn__wrap">

            <ui-button-door-size
              class="btn__size"
              :doorId="doorId"
              :prod="prod"
              v-model:size="chosen.size"
            ></ui-button-door-size>

            <ui-button-opening
              class="btn__opening"
              :doorId="doorId"
              :prod="prod"
              v-model:side="chosen.side"
            ></ui-button-opening>

          </div>
        </div>
        
          <ul class="sec2__tech-list tech-list" v-show="isRolledOut">
            <li class="tech-list__item item">
              <span class="item__l">Основной замок:</span>
              <span class="item__c"></span>
              <span class="item__r" v-bool-to-string>{{ prod.lock1 }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Дополнительный замок:</span>
              <span class="item__c"></span>
              <span class="item__r" v-bool-to-string>{{ prod.lock2 }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Толщина дверного полотна:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.d }}mm</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Количество контуров уплотнения:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.cont }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Цвет покраски:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ currSlide.currRal }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Тип двери:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.doorType }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Назначение двери:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.purpose }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Наличие зеркала:</span>
              <span class="item__c"></span>
              <span class="item__r" v-bool-to-string>{{ prod.mirr }}</span>
            </li>
          </ul>
      </div>

      <div class="info__sec2 sec2">
          <ui-button-open-slider
            class="sec2__ui-button" 
            @clicked="openPreview"
          ></ui-button-open-slider>
          <p class="sec2__desc">
            Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam
          </p>
      </div>
    </div>

  </div>
  
</template>

<script>
import uiButtonOpening from '@/components/UI/ui-button-opening.vue'
import uiButtonDoorSize from '@/components/UI/ui-button-door-size.vue'
import uiButtonDetails from '@/components/UI/ui-button-details.vue'
import uiButtonOpenSlider from '@/components/UI/ui-button-open-slider.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'comp-prod-info',
  components: { uiButtonOpening, uiButtonDoorSize, uiButtonDetails, uiButtonOpenSlider },
  props: {
    doorId: { type: Number, default: undefined },
    prod: { type: Object, default: () => {} },
  },
  data() {
    return{
      isRolledOut: true,
      unID: '',
      currSlide: '',
      chosen: { size: '', side: '' },
    }
  },
  watch: {
    activity(v) { this.currSlide = v },
    chosen(dt) { this.$emit('update:details', dt) }
  },
  methods: {
    ...mapActions('product', ['SET_PREVIEW']),

    openPreview() {
      this.SET_PREVIEW({ isOn: true, prod: this.prod })
    },
    toRollOut() { this.isRolledOut = !this.isRolledOut },
  },
  computed: {
    ...mapGetters('product', ['SETTS', 'SLIDE_INFO']),
    activity() { return this.SLIDE_INFO(this.doorId) }
  },

  created() { this.unID = Math.random().toString(16).slice (2) },
  mounted() {
    this.currSlide = this.SLIDE_INFO(this.doorId)
    this.$emit('update:details', this.chosen)
  }
}
</script>

<style lang="scss" scoped>
.comp-prod-info, .info {
  width: 100%;

  &__wrap {
    height: 100%;
    width: 100%;
    @include media('min', 'sm') { padding: 0 0 0px 0; }
    @include media('min', 'lg') { padding: 0 0 9px 0; }
  }
  &__sec1, .sec1 {
    width: 100%;
    @include media('min', 'sm') { margin-bottom: 29px; }
    @include media('min', 'lg') { margin-bottom: 20px; }
    &__btn, .btn {
      @include media('min', 'sm') { @include fcr; gap: 13px; }
      @include media('min', 'lg') { @include fc; gap: 14px; margin-bottom: 30px; }

      &__ui-details {
        @include media('min', 'sm') { margin-bottom: 12px; }
        @include media('min', 'lg') { margin-bottom: 0px; }
        
      }
      &__wrap {
        @include media('min', 'sm') { @include fr-sb-c; }
        @include media('min', 'lg') { @include fr-st-c; gap: 19px; }
      }
      &__size {
        
        @include media('min', 'sm') { flex: 0 0 130px; }
        @include media('min', 'lg') { flex: 0 0 158px; }
      }
      &__opening{

        @include media('min', 'sm') { flex: 0 0 156px; }
        @include media('min', 'lg') { flex: 0 0 190px; }
      }
    }
    &__tech-list, .tech-list {
      &__item, .item {
        position: relative;
        @include fr-sb-c;
        @include media('min', 'sm') { margin-bottom: 7px; }
        @include media('min', 'lg') { margin-bottom: 4px;}
        &__l {
          @include FT450-14-16;
        }
        &__c {
          display: block;
          height: 1px;
          align-self: flex-end;
          flex: 1;
          margin: 0 4px 4px;
          border-bottom: 3px dotted $grey-C3;
        }
        &__r {
          @include FT450-14-16;
        }
      } 
    }
  }
  &__sec2, .sec2 {
    width: 100%;
    transition: transform 0.5s, opacity 0.5s;
    &__ui-button {
      @include media('min', 'sm') { margin-bottom: 24px; }
      @include media('min', 'lg') { margin-bottom: 19px; }
    }
    &__desc {
      @include FT400-16-14;
      color: $grey-C3;
    }
  }
}
// .roll_out-enter-active {
//   animation : slide-in 0.3s ease-out forwards;
//   transition : opacity 0.3s;
// }
// .roll_out-leave-active {
//   animation : slide-out 0.3s ease-out forwards;
//   transition : opacity 0.3s;
// }
// .roll_out-enter-from,
// .roll_out-leave-to {
//   opacity: .3;
// }

// @keyframes slide-in {
//   from { transform: translateY(20px); }
//   to { transform: translateY(0); }
// }
// @keyframes slide-out {
//   from { transform: translateY(0); }
//   to { transform: translateY(20px); }
// }
</style>