<template>
  <div class="comp-prod-info info">
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
            ></ui-button-door-size>
            <ui-button-opening
              class="btn__opening"
            ></ui-button-opening>
          </div>
        </div>
        
        <transition 
          name="roll_out" 
          appear
        >
          <ul class="sec2__tech-list tech-list" v-if="isRolledOut">
            <li class="tech-list__item item">
              <span class="item__l">Основной замок:</span>
              <span class="item__c"></span>
              <span class="item__r" v-bool-to-string>{{ prodDt.lock1 }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Дополнительный замок:</span>
              <span class="item__c"></span>
              <span class="item__r" v-bool-to-string>{{ prodDt.lock2 }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Толщина дверного полотна:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prodDt.d }}mm</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Количество контуров уплотнения:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prodDt.cont }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Цвет покраски:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ artDt.col1 }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Назначение двери:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ doorType }}</span>
            </li>
            <li class="tech-list__item item">
              <span class="item__l">Наличие зеркала:</span>
              <span class="item__c"></span>
              <span class="item__r" v-bool-to-string>{{ prodDt.mirr }}</span>
            </li>
          </ul>
        </transition>
      </div>

      <div class="info__sec2 sec2">
        <!-- <transition-group name="slide_up" appear> -->
          <ui-button-open-slider
            class="sec2__ui-button" @click="openProdPreview"
          ></ui-button-open-slider>
          <p class="sec2__desc">
            Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam
          </p>
        <!-- </transition-group> -->
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
  props: { doorId: { type: Number, default: 0 } },
  data() {
    return{
      isRolledOut: true
    }
  },
  methods: {
    ...mapActions('common', ['SET_MODAL']),
    openProdPreview() { this.SET_MODAL(true) },
    toRollOut() { this.isRolledOut = !this.isRolledOut },
  },
  computed: {
    ...mapGetters('product', ['PROD', 'CURR_ARTICLE_DATA', 'SETTS']),

    prodDt() { return this.PROD(this.doorId) },
    artDt() { return {...this.CURR_ARTICLE_DATA(this.doorId)} },
    doorType() { return this.SETTS.typ[this.prodDt.typ] }
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
.roll_out-enter-active {
  animation : slide-in 0.3s ease-out forwards;
  transition : opacity 0.3s;
}
.roll_out-leave-active {
  animation : slide-out 0.3s ease-out forwards;
  transition : opacity 0.3s;
}
.roll_out-enter-from,
.roll_out-leave-to {
  opacity: .3;
}

@keyframes slide-in {
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
}
@keyframes slide-out {
  from { transform: translateY(0); }
  to { transform: translateY(20px); }
}
</style>