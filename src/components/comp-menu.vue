<template>
  <menu class="menu">
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
          <ui-button-main
            :setts="btnSetts"
          ></ui-button-main>
        </div>
      </div>
    </div>
  </menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'menu-section',
  data() {
    return {
      logo: { col1: '#333333', col2: '#12AB51', col3: '#333333' },
      btnSetts: { txt:'Оставить заявку', txtCl:'#fff', bg:'#12AB51', icn:'phone', icnCl:'#fff', icnBg:'#137039' }
    }
  },
  computed: {
    ...mapGetters('company', ['title', 'contacts']),
  },
}
</script>

<style lang="scss" scoped>
  .menu {
    height: $nav-height;
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
          @include flex-title;
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
    &__contacts,
    .contacts {
      @include flex-jcsb;
      &__tel {
        margin-right: 61px;
        @include display-mode;
      }
      &__email {
        margin-right: 46px;
        @include display-mode;
      }
      &__order-btn {
        position: relative;
        top: 1px;
        @include order-button;
      }
    }
  }
</style>
