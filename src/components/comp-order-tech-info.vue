<template>
  <div class="comp-order-info tech-list">
    <!-- <prod info content -->
    <div class="tech-list__wrap">
        
          <ul class="tech-list__items items">
            <li class="items__item item">
              <span class="item__l">Размер:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.order.options.size }}</span>
            </li>
            <li class="items__item item">
              <span class="item__l">Сторона открывания:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.order.options.side }}</span>
            </li>
            <li class="items__item item">
              <span class="item__l">Основной замок:</span>
              <span class="item__c"></span>
              <span class="item__r" v-bool-to-string>{{ prod.order.lock1 }}</span>
            </li>
            <li class="items__item item">
              <span class="item__l">Дополнительный замок:</span>
              <span class="item__c"></span>
              <span class="item__r" v-bool-to-string>{{ prod.order.lock2 }}</span>
            </li>
            <li class="items__item item">
              <span class="item__l">Толщина дверного полотна:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.order.d }}mm</span>
            </li>
            <li class="items__item item">
              <span class="item__l">Количество контуров уплотнения:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.order.cont }}</span>
            </li>
            <li class="items__item item">
              <span class="item__l">Цвет покраски:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.order.art.col1 }}</span>
            </li>
            <li class="items__item item">
              <span class="item__l">Тип двери:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.order.doorType }}</span>
            </li>
            <li class="items__item item">
              <span class="item__l">Назначение двери:</span>
              <span class="item__c"></span>
              <span class="item__r">{{ prod.order.purpose }}</span>
            </li>
            <li class="items__item item">
              <span class="item__l">Наличие зеркала:</span>
              <span class="item__c"></span>
              <span class="item__r" v-bool-to-string>{{ prod.order.mirr }}</span>
            </li>
          </ul>

    </div>

  </div>
  
</template>

<script>

export default {
  name: 'comp-order-info',
  props: { prod: { type: Object, default: () => { } } },
  data() {
    return{
    }
  },
  computed: { },
}
</script>

<style lang="scss" scoped>
.comp-order-info, .tech-list {
  width: 100%;

  &__wrap {
    height: 100%;
    width: 100%;
    @include media('min', 'sm') { padding: 0 0 0px 0; }
    @include media('min', 'lg') { padding: 0 0 9px 0; }
  }
  &__items, .items {
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
</style>