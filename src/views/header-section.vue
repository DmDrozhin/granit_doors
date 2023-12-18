<template>
  <menuSection></menuSection>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__left-side">
        <div class="header__title-block title-block">
          <h2 class="title-block__title">{{ title }}</h2>
          <p class="title-block__sub-title">{{ title2 }}</p>
        </div>

          <div class="header__nav-btn-block nav-btn-block">
            <ui-button-nav
              :setts="{ isRight: false }"
            ></ui-button-nav>
            <ui-button-nav
              :setts="{ isRight: true }"
            ></ui-button-nav>
          </div>
      </div>
      <div class="header__right-side">
        <div class="header__signs-block sign">

          <ui-sign-benefits>
            <template #icon>
              <ui-icon-thumb-up
                class="sign__icon"
              ></ui-icon-thumb-up>
            </template>
            <template #txt>
              <span class="sign__txt">{{ signTxt1 }}</span>
            </template>
          </ui-sign-benefits>

          <ui-sign-benefits>
            <template #icon>
              <ui-icon-shield
                class="sign__icon"
              ></ui-icon-shield>
            </template>
            <template #txt>
              <span class="sign__txt">{{ signTxt2 }}</span>
            </template>
          </ui-sign-benefits>

          <ui-sign-benefits>
            <template #icon>
              <ui-icon-trust
                class="sign__icon"
              ></ui-icon-trust>
            </template>
            <template #txt>
              <span class="sign__txt">{{ signTxt3 }}</span>
            </template>
          </ui-sign-benefits>
        </div>

      </div>
    </div>



  </header>
</template>

<script>
import menuSection from '../components/comp-menu.vue'
import UiIconThumbUp from '../components/UI/svg-icons/ui-icon-thumb-up.vue'

export default {
  name: 'header-section',
  components: { menuSection, UiIconThumbUp },
  data() {
    return {
      title: 'лучшие предложения на рынке дверей',
      title2: 'от известных производителей',
      signTxt1: 'Качество сборки',
      signTxt2: 'Гарантия товара',
      signTxt3: 'Доверие клиентов',
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    // @include general-width;
    margin: 0.875rem 0;
    @include header-bg;
    @include header;
    background-color: #C3C3C3;
    &__wrapper {
      height: inherit;
      display: flex;
      justify-content: space-between;

    }
    &__left-side {
      margin-top: 49px;
      margin-left: 92px;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
    }
    &__title-block, 
    .title-block {

      width: 585px;
      &__title {
        @include header-title;
      }
      &__sub-title {
        @include header-sub-title;
        margin-bottom: 60px;
      }
    }
    &__nav-btn-block, 
    .nav-btn-block {
      display: flex;
    }
    &__right-side {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

    }
    &__signs-block, .sign {
      display: flex;
      gap: 2.1rem;
      margin-bottom: .75rem;
      margin-right: .75rem;
      &__icon {}
      &__txt {
        @include card-txt;
        text-align: center;
        text-wrap: wrap;
      }
    }
  }
</style>
