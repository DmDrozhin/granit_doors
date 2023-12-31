<template>
  <div class="comp-prod-info info">
    <div class="info__wrap">
      <div class="info__sec1 sec1">
        <div class="sec1__btn btn">
          <ui-button-details
            class="btn__ui-details"
            @toRoll="toRoll"
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
        <ul class="sec2__tech-list tech-list">
          <li class="tech-list__item item">
            <span class="item__l">Основной замок:</span>
            <span class="item__c"></span>
            <span class="item__r">some</span>
          </li>
          <li class="tech-list__item item">
            <span class="item__l">Дополнительный замок:</span>
            <span class="item__c"></span>
            <span class="item__r">some</span>
          </li>
          <li class="tech-list__item item">
            <span class="item__l">Толщина дверного полотна:</span>
            <span class="item__c"></span>
            <span class="item__r">some</span>
          </li>
          <li class="tech-list__item item">
            <span class="item__l">Количество контуров уплотнения:</span>
            <span class="item__c"></span>
            <span class="item__r">some</span>
          </li>
          <li class="tech-list__item item">
            <span class="item__l">Цвет покраски:</span>
            <span class="item__c"></span>
            <span class="item__r">some</span>
          </li>
          <li class="tech-list__item item">
            <span class="item__l">Назначение двери:</span>
            <span class="item__c"></span>
            <span class="item__r">some</span>
          </li>
          <li class="tech-list__item item">
            <span class="item__l">Наличие зеркала:</span>
            <span class="item__c"></span>
            <span class="item__r">some</span>
          </li>
        </ul>
      </div>

      <div class="info__sec2 sec2">
        <ui-button-open-slider
          class="sec2__ui-button"
        ></ui-button-open-slider>
        <div class="sec2__desc">
          Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
import uiButtonOpening from '@/components/UI/ui-button-opening.vue'
import uiButtonDoorSize from '@/components/UI/ui-button-door-size.vue'
import uiButtonDetails from '@/components/UI/ui-button-details.vue'
import uiButtonOpenSlider from '@/components/UI/ui-button-open-slider.vue'

export default {
  name: 'comp-prod-info',
  components: { uiButtonOpening, uiButtonDoorSize, uiButtonDetails, uiButtonOpenSlider },
  data() {
    return{
      isRolled: false
    }
  },
  methods: {
    toRoll() { this.isRolled = !this.isRolled }
  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.comp-prod-info, .info {
  width: 100%;

  &__wrap {
    height: 100%;
    width: 100%;
    @include media('min', 'sm') { @include fc-sb-st; padding: 0 0 0px 0; gap: 22px; }
    @include media('min', 'lg') { @include fc-sb-st; padding: 0 0 9px 0; gap: none; }
  }
  &__sec1, .sec1 {
    width: 100%;
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


</style>