<template>
  <menuSection></menuSection>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__left-side">
        <div class="header__title-block title-block">
          <h2 class="title-block__title">{{ title }}</h2>
          <p class="title-block__sub-title">{{ title2 }}</p>
        </div>
        <div class="header__nav-buttons">
          <ui-nav-buttons></ui-nav-buttons>
        </div>
      </div>
      <div class="header__right-side">
        <div class="header__signs-block sign">
          <div>
            <ui-emblem-quality></ui-emblem-quality>
          </div>
          <div>
            <ui-emblem-guarantee></ui-emblem-guarantee>
          </div>
          <div>
            <ui-emblem-trust></ui-emblem-trust>
          </div>
        </div>

      </div>
    </div>



  </header>
</template>

<script>
import menuSection from '../components/comp-menu.vue'

export default {
  name: 'header-section',
  components: { menuSection },
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
    @include media('min', 'sm') {
      margin-top: 26px;
      margin-left: 15px;
    }

    @include media('min', 'lg') {
      margin-top: 49px;
      margin-left: 92px;
    }
  }

  &__title-block,
  .title-block {
    &__title {
      @include header-title;

      @include media('min', 'sm') {
        width: 85%;
        margin-bottom: 8px;
      }

      @include media('min', 'lg') {
        width: 70%;
      }
    }

    &__sub-title {
      @include header-sub-title;

      @include media('min', 'sm') {
        margin-bottom: 23px;
        line-height: 1.3;
      }

      @include media('min', 'lg') {
        margin-bottom: 68px;
        line-height: .5;
      }
    }
  }

  &__right-side {
    @include media('min', 'sm') {}
    @include media('min', 'lg') {
      display: flex;
      align-items: flex-end;
    }
  }

  &__signs-block,
  .sign {

    // display: flex;
    // flex-direction: column;
    // justify-content: flex-end;
    @include media('min', 'sm') {
      display: flex;
      flex-direction: column;
      gap: 5.7px;
      margin-top: 10px;
      margin-right: 14px;
    }

    @include media('min', 'lg') {
      display: flex;
      flex-direction: row;
      gap: 2.1rem;
      margin-bottom: .75rem;
      margin-right: .75rem;
    }
  }
}
</style>
@include media('min', 'sm') {

}
@include media('min', 'lg') {

}
