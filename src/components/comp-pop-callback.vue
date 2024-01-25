<template>
  <div class="comp-pop-callback callback">
    <div class="callback__close-button close">
      <button class="close__button" @click="closePopUp">
        <ui-icon-close :setts="{ col: '#137039' }" />
      </button>
    </div>
    <div class="callback__wrap">
      <hgroup>
        <h3 class="callback__title">{{ title }}</h3>
        <p class="callback__sub-title">{{ sub }}</p>
      </hgroup>
      <form class="callback__form form" @submit.prevent.stop>
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
            <ui-order-button
              class="form__button"
              @clicked="clicked"
              :disabled="!validate"
              :isActive="!validate"
            ></ui-order-button>
            <p class="form__text">{{ text }}</p>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import uiOrderButton from '@/components/UI/ui-order-button.vue'
export default {
  components: { uiOrderButton },
  name: 'comp-pop-callback',
  data() {
    return{
      title: 'оставь заявку и получи полный прайс на наш каталог',
      sub: 'от известных производителей',
      text: 'Нажимая кнопку “Оставить заявку” вы соглашаетесь с условиями обработки персональных данных',
      client: { name: '', tel: '' }
    }
  },
  methods: {
    clicked() {
      if (this.client.name && this.client.tel) {
        this.$store.dispatch('common/SET_CALLBACK_POP', { isOn: false, client: this.client })
      }
    },
    closePopUp() { this.$store.dispatch('common/SET_CALLBACK_POP', { isOn: false, client: '' }) },
  },
  computed: {
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
.comp-pop-callback, 
.callback {
  border-radius: 19px;
  @include media('min', 'sm') { width: 320px; height: 630px; padding: 0 10px;  margin: 15px 0; }
  @include media('min', 'lg') { width: 550px; height: 384px; @include fr-c-c; padding: 0;  margin: 0; }
  background-color: $light;
  position: relative;
  &__close-button, .close {
    position: absolute;
    top: 22px;
    display: flex;
    @include media('min', 'sm') { width: 24px; height: 24px; right: 20px; }
    @include media('min', 'lg') { width: 33px; height: 33px; right: 19px; }
    &__button {
    }
  }
  &__wrap {
    // border: 1px solid rgb(42, 0, 252); // tech
    @include media('min', 'sm') { width: 300px; height: fit-content; }
    @include media('min', 'lg') { width: 490px; height: fit-content; }
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
  &__form, .form {
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
      @include media('min', 'sm') { line-height: 1.3; text-align: center; padding: 0 5px; }
      @include media('min', 'lg') { line-height: 1; text-align: left; padding: 0 2px; }
    }

  }
}

</style>