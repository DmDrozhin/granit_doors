<template>
  <menu class="menu-section menu">
    <div class="menu__container">
      <div class="menu__name-block name-block">
        <div class="name-block__wrapper">
          <div class="name-block__logo">
            <ui-icon-logo :setts="logo"></ui-icon-logo>
          </div>
          <div class="name-block__title title">
            <span class="title__wrapper">
              <span class="title__t1">{{ title.logo[0] }}</span>
              <span class="title__t2">{{ title.logo[1] }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="menu__contacts contacts">
        <a :href="`tel:${contacts.tel}`">
          <ui-comp-info
            class="contacts__tel"
            :setts="{ 
              txt: contacts.tel,
              txtCl: '#000',
              icn: 'tel',
              icnCl: '#fff',
              icnBg: '#137039'
            }"
          ></ui-comp-info>
        </a>
        <a :href="`mailto:${contacts.email}`">
          <ui-comp-info
            class="contacts__email"
            :setts="{ 
              txt: contacts.email,
              txtCl: '#000',
              icn: 'email',
              icnCl: '#fff',
              icnBg: '#137039'
            }"
          ></ui-comp-info>
        </a>
        <div class="contacts__order-btn">
          <ui-order-button-head></ui-order-button-head>
        </div>
      </div>
    </div>
  </menu>
</template>

<script>
import uiOrderButtonHead from '@/components/UI/ui-order-button-head.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'menu-section',
  components: { uiOrderButtonHead, },
  data() {
    return {
      logo: { col1: '#333333', col2: '#12AB51', col3: '#333333' }
    }
  },
  computed: {
    ...mapGetters('company', ['title', 'contacts']),
  },
}
</script>

<style lang="scss" scoped>
// NAV Menu
$nav-height: 4.5rem;
.menu-section, 
.menu {
  height: $nav-height;
  @include container-width;
  &__container {
    height: inherit;
    @include flex-jcsb;
  }
  &__name-block, 
  .name-block {
    height: inherit;
    &__wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      // gap: .5rem;
    }
    &__logo {
      width: 21px;
      position: relative;
      top: 2px;
      margin-right: .55rem;
    }
    &__title, .title {
      height: $nav-height;
      &__wrapper {
        height: inherit;
        height: $nav-height;
        @include media('min', 'sm') { @include fc-c-st }
        @include media('min', 'lg') { @include fr-sb-c }
      }
      &__t1 {
        @include site-title;
        color: $green-lt;
        margin-right: 0.5rem;
        @include media('min', 'sm') { letter-spacing: 0.3px; }
        @include media('min', 'lg') { letter-spacing: 0px; }
      }
      &__t2 {
        @include site-title;
        color: $green-dk;
        @include media('min', 'sm') { letter-spacing: 0.3px; }
        @include media('min', 'lg') { letter-spacing: 0px; }
      }
    }
  }
  // Top menu info-blocks
  @mixin display-mode {
    @include media('min', 'sm') { display: none; }
    @include media('min', 'lg') { display: block; }
  }
  &__contacts,
  .contacts {
    @include fr-sb-c;
    &__tel {
      margin-right: 61px;
      @include display-mode;
    }
    &__email {
      margin-right: 46px;
      @include display-mode;
    }
    &__order-btn {
      @include media('min', 'sm') { width: 120px; }
      @include media('min', 'lg') { width: 191px; }
    }
  }
}
</style>
