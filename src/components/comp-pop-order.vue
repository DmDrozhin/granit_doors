<template>
  <div class="comp-pop-order order">
    <div class="order__close-button close">
      <button class="close__button" @click="closePopUp">
        <ui-icon-close :setts="{ col: '#137039' }" />
      </button>
    </div>
    <div class="order__wrap">
      <hgroup>
        <h3 class="order__title">{{ title }}</h3>
        <!-- <p class="order__sub-title">{{ sub }}</p> -->
      </hgroup>
      <div class="order__name-block name-block">
        <h3 class="name-block__prod-name">{{ ORDER_POP.order.name }}</h3>
        <span class="name-block__prod-art">Арт. {{ ORDER_POP.order.art.art.slice(1) }}</span>
      </div>
      <div class="order__prod-render">
        <div class="order__prod-pics pics">
          <img 
            class="pics__door-pic pic-1"
            :src="ORDER_POP.order.art.src1[0]"
            @error="$event.target.src = altImg"
            :alt="`Наружная сторона. ${ORDER_POP.order.name} Арт.${ORDER_POP.order.art.art.slice(1)}`"
          >
          <img 
            class="pics__door-pic pic-2"
            :src="ORDER_POP.order.art.src2[0]"
            @error="$event.target.src = altImg"
            :alt="`Внутренняя сторона. ${ORDER_POP.order.name} Арт.${ORDER_POP.order.art.art.slice(1)}`"
          >
        </div>
        
        <div class="order__prod-price">
          <ui-sale-star
            class="order__sale-star"
            :sale="ORDER_POP.order.art.saleNum"
          ></ui-sale-star>
          <ui-price
            :setts="{ price: ORDER_POP.order.art.price, salePrice: ORDER_POP.order.art.salePrice }"
          ></ui-price>
        </div>
      </div>
      <div class="order__tech-details">
        <comp-order-info
          :prod="ORDER_POP"
        ></comp-order-info>
      </div>
      <form class="order__form form" @submit.prevent.stop>
          <div class="form__inputs inputs">
            
            <input
              class="inputs__name"
              type="text" 
              placeholder="Ваше имя" 
              v-model="client.name"
              pattern="^(?=.*[A-Za-z0-9А-ЯЄIа-яєi]).{3,60}$"
              required
            >

            <div class="inputs__wrap">
              <input 
                class="inputs__tel"
                type="tel" 
                placeholder="Ваш телефон" 
                v-model="client.tel" 
                pattern="^\+380\d{2}\d{3}\d{2}\d{2}$"
                required
                @focus="$event.target.placeholder='+38 xxx xxx xx xx'"
              >
              <span class="inputs__tel-format">Формат: +38 0XX XXX XX XX</span>
            </div>

          </div>
          <div class="form__submit">
            <ui-order-button-purchase
              class="form__button"
              @clicked="clicked"
              :disabled="!validate"
              :isActive="!validate"
            ></ui-order-button-purchase>
            <p class="form__text">{{ text }}</p>
          </div>
      </form>
    </div>
  </div>
  
</template>

<script>
import uiOrderButtonPurchase from '@/components/UI/ui-order-button-purchase.vue'
import compOrderInfo from '@/components/comp-order-tech-info.vue'
import uiPrice from '@/components/UI/ui-price.vue'
import uiSaleStar from '@/components/UI/ui-sale-star.vue'
import { mapGetters, } from 'vuex'
export default {
  components: { uiOrderButtonPurchase, compOrderInfo, uiPrice, uiSaleStar },
  name: 'comp-pop-order',
  data() {
    return{
      title: 'заказать выбранный товар',
      sub: '⯈ VISA ⯈ MASERCARD ⯈ Other',
      text: 'Нажимая кнопку “Оставить заявку” вы соглашаетесь с условиями обработки персональных данных',
      client: { name: '', tel: '' },
      altImg: require('../assets/images/door/placeholder.webp')
    }
  },
  methods: {
    clicked() {
      if (this.client.name && this.client.tel) {
        this.$store.dispatch('common/SEND_ORDER', { client: this.client, order: this.ORDER_POP.order })
      }
    },
    closePopUp() { this.$store.dispatch('common/SET_ORDER_POP', { isOn: false, order: '' }) },
  },
  computed: {
    ...mapGetters('common', ['ORDER_POP']),

    validate() {
      const regex1 = /^\+380\d{2}\d{3}\d{2}\d{2}$/g
      const test1 = regex1.exec(this.client.tel)
      const regex2 = /^(?=.*[A-Za-z0-9А-ЯЄIа-яєi]).{3,60}$/
      const test2 = regex2.exec(this.client.name)
      return test1 && test2
    }
  }

}
</script>

<style lang="scss" scoped>
.comp-pop-order, 
.order {
  // margin: 50px; // tech
  // border: 1px solid lawngreen; // tech
  border-radius: 19px;
  @include media('min', 'sm') { width: 320px; height: fit-content; padding: 0 10px; margin: 15px 0; }
  @include media('min', 'lg') { width: 550px; height: 960px; @include fr-c-c; padding: 0; margin: 0; }
  background-color: $light;
  position: relative;
  &__close-button, .close {
    position: absolute;
    top: 22px;
    // display: flex;
    @include media('min', 'sm') { width: 24px; height: 24px; right: 20px; }
    @include media('min', 'lg') { width: 33px; height: 33px; right: 19px; }
    &__button {
    }
  }
  &__wrap {
    // border: 1px solid rgb(42, 0, 252); // tech
    @include media('min', 'sm') { width: 300px; }
    @include media('min', 'lg') { width: 490px; }
  }
  &__wrap hgroup {
    @include media('min', 'sm') { text-align: center; margin: 98px 0 28px; }
    @include media('min', 'lg') { text-align: left; margin: 0 0 22px 0; }

  }
  &__title {
    font-family: 'FuturaPTHeavyOblique';
    color: $green-dk;
    font-size: 24px;
    text-transform: uppercase;
    @include media('min', 'sm') { margin: 0 -2px 8px; }
    @include media('min', 'lg') { margin: 0; }
  }
  &__sub-title {
    @include FT400;
    font-size: 1.125rem; // 18
    @include media('min', 'sm') { display: block; }
    @include media('min', 'lg') { display: none; }
  }
  &__name-block, .name-block {
    @include media('min', 'sm') { display: block; }
    @include media('min', 'lg') { @include fr-sb-c; }
    
    &__prod-name {
      color: #333;
      font-family: 'Futura PT 600';
      line-height: 1.3;
      @include media('min', 'sm') { font-size: 1.4375rem; margin-bottom: 19px; } // 23
      @include media('min', 'lg') { font-size: 1.4375rem; margin-bottom: 17px; } // 23
    }
    &__prod-art {
      background-color: $green-lt;
      @include FT400-16-14;
      color: $light;
      border-radius: 13px;
      padding: 8px 12px;
      
      @include media('min', 'sm') { position: absolute; right: 10px; }
      @include media('min', 'lg') { position: static; }
    }
  }
  &__prod-render {
    @include media('min', 'sm') { display: block; }
    @include media('min', 'lg') { @include fr-sb-c; }
  }

  &__prod-pics, .pics {
    $pic-w-sm: min(92px, 40vh);
    $pic-h-sm: min(193px, 25vh);
    $pic-w-lg: min(134px, 40vh);
    $pic-h-lg: min(282px, 25vh);
    img {
      @include media('min', 'sm') { width: $pic-w-sm; height: $pic-h-sm }
      @include media('min', 'lg') { width: $pic-w-lg; height: $pic-h-lg }
    }
    @include media('min', 'sm') { margin-bottom: 22px; }
    @include media('min', 'lg') { margin-bottom: 0px; }
  }
  &__prod-pics .pic-1 {
    margin-right: 15px;
  }
  &__prod-price {
    background-color: $grey-F5;
    padding: 12px 12px 22px 14px;
    border-radius: 27px;
    @include media('min', 'sm') { margin-bottom: 22px; }
    @include media('min', 'lg') { margin-bottom: 0px; }
  }
  &__sale-star {
    @include media('min', 'sm') { margin: 0 0 -5px auto; }
    @include media('min', 'lg') { margin: 0 0 8px auto; }
  }
  &__tech-details {

  }
  &__form, .form {
    margin-top: 40px;
    &__inputs, .inputs {
      width: 100%;
      @include media('min', 'sm') { @include fc-st; row-gap: 14px; margin-bottom: 58px; }
      @include media('min', 'lg') { @include fr-sb-c; column-gap: 14px; margin-bottom: 22px; }
      
      @mixin inp {
        width: 100%;
        height: 49px;
        border: 1px solid $grey-C6;
        border-radius: 6px;
        padding: 0 22px;
        @include FT400;
        font-size: 1.125rem; // 18
      }
      & input::placeholder {
        @include FT400;
        font-size: 1.125rem; // 18
        color: $grey-CD;
      }
      &__name {
        @include inp;
        @include media('min', 'sm') { }
        @include media('min', 'lg') { flex: 0 1 calc(50% - 7px); }
        
      }
      &__wrap {
        flex: 1;
        position: relative;
      }
      &__tel {
        @include inp;
      }
      &__tel:invalid + .inputs__tel-format {
        position: absolute;
        background-color: #fff;
        font-size: 0.75rem;
        color: $dark-33;
        padding: 0 3px;
        left: 20px;
        top: -7px;
      }
      &__tel:invalid:focus + .inputs__tel-format {
        color: $green-75;
      }
      &__tel:valid + .inputs__tel-format {
        display: none;
      }
      &__tel:valid, &__name:valid {
        border-color: $green-75;
      }
    }

    &__submit {
      @include media('min', 'sm') { @include fc-st-c; row-gap: 18px; column-gap: 0; }
      @include media('min', 'lg') { @include fr-sb-c; row-gap: 0; column-gap: 14px; }
    }
    &__button {
      @include media('min', 'sm') { flex: 1; }
      @include media('min', 'lg') { flex: 1 0 calc(50% - 7px); }
    }
    &__button:disabled {
      cursor: auto;
    }
    &__text {
      @include FT400;
      color: $black-12;
      font-size: 0.8125rem;
      @include media('min', 'sm') { 
        line-height: 1.3; 
        text-align: center; 
        padding: 0 5px;
        margin-bottom: 30px;
      }
      @include media('min', 'lg') { 
        line-height: 1; 
        text-align: left; 
        padding: 0 2px; 
      }
    }
  }
}

</style>
