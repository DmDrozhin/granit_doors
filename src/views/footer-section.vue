<template>
  <footer class="footer-section footer">
    <div class="footer__container">
      <div class="footer__wrapper">
        <div class="footer__side-l side-l">
          <div class="side-l__name-block name-block">
            <div class="name-block__wrapper">

              <div class="name-block__logo">
                <ui-icon-logo :setts="logo"></ui-icon-logo>
              </div>

              <h2 class="name-block__site-title title">
                <span class="title__wrapper">
                  <span class="title__part-1">{{ title.p1 }}</span>
                  <span class="title__part-2">{{ title.p2 }}</span>
                </span>
              </h2>

            </div>
            <p class="name-block__txt">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>

          </div>
          <div class="side-l__links links">
            <ul class="links__l l">
              <li><a href="#">Квартирные двери</a></li>
              <li><a href="#">Двери для дачи</a></li>
              <li><a href="#">Двери для дачи</a></li>
            </ul>
            <ul class="links__r r">
              <li><a href="#">Квартирные двери</a></li>
              <li><a href="#">Двери для дачи</a></li>
              <li><a href="#">Двери для дачи</a></li>
            </ul>
          </div>

        </div>
        <div class="footer__side-r side-r">
          <div class="side-r__contacts contacts">
        <ui-comp-info
          class="contacts__tel"
          :setts="{ 
            txt: '+38 (097) 555-88-77',
            txtCl: '#fff',
            icn: 'phone',
            icnCl: '#fff',
            icnBg: '#137039'
          }"
        ></ui-comp-info>
        <ui-comp-info
          class="contacts__email"
          :setts="{ 
            txt: 'info@corp.com',
            txtCl: '#fff',
            icn: 'email',
            icnCl: '#fff',
            icnBg: '#137039'
          }"
        ></ui-comp-info>

        <div class="contacts__order-btn">
          <ui-button-main
            :setts="this.btnSetts"
          ></ui-button-main>
        </div>
      </div>
          <ul class="side-r__socials socials">
            <li class="socials__1"><a href="#">Lorem ipsum dolor sit amet consectetur.</a></li>
            <li class="socials__2"><a href="#">Lorem ipsum dolor sit amet consectetur.</a></li>
            <li class="socials__3"><a href="#">Lorem ipsum dolor sit amet consectetur.</a></li>
          </ul>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'footer-section',
  data() {
    return {
      logo: { col1: '#fff', col2: '#fff', col3: '#fff' },
      title: { p1: 'двери', p2: 'гранит' },
      btnSetts: { txt: 'Оставить заявку', txtCl: '#000', bg: '#fff', icn: 'phone', icnCl: '#137039', icnBg: '#D9D9D9' }
    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.footer-section,
.footer {
  @include footer;
  background-color: $green-lt;

  &__container {
    height: inherit;
    @include container-footer;
    margin: 0 auto;
    // border: 1px solid yellow;
  }
  &__wrapper {

    @include media('min', 'sm') {

    }
    @include media('min', 'lg') {
      height: inherit;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__side-l,
  .side-l {
    @include media('min', 'sm') { 
      padding-top: 42px;
    }
    @include media('min', 'lg') { 
      padding-top: 0px;
      flex: 1;
      display: flex;
      gap: 75px;
    }

    &__name-block,
    .name-block {
      height: inherit;
      @include media('min', 'sm') { margin-bottom: 33px; }
      @include media('min', 'lg') { margin-bottom: 0px;  }

      &__wrapper {
        @include media('min', 'sm') { margin-bottom: 27px; }
        @include media('min', 'lg') { margin-bottom: 16px; }
        position: relative;
        left: 2px;
        display: flex;
        align-items: center;
        // gap: .5rem;
        
      }

      &__logo {
        @include media('min', 'sm') { width: 15.5px; margin-right: .3rem; }
        @include media('min', 'lg') { width: 21px; margin-right: .5rem; }

        position: relative;
        top: 2px;
        
      }

      &__site-title,
      .title {
        &__wrapper {
          height: inherit;
          // @include flex-title;
        }
        &__part-1 {
          @include site-title;
          color: $light;
          @include media('min', 'sm') { margin-right: 0.4rem; }
          @include media('min', 'lg') { margin-right: 0.5rem; }
        }
        &__part-2 {
          @include site-title;
          color: $light;
        }
      }
      &__txt {
        @include footer-txt;
        width: 277px;
      }
    }
    &__links, 
    .links {
      // border: 1px solid indianred;
      display: flex;
      align-items: center;
      @include media('min', 'sm') { 
        position: static;
        flex: 1 1 100%;
        margin-bottom: 48px;
      }
      @include media('min', 'lg') { 
        position: relative;
        top: 2px;
        flex: 1 1 248px;
        margin-bottom: 0px;
      }
      // gap: 35px;
      & li {
        margin-bottom: 10px;
      }
      & li:last-child {
        margin-bottom: 0;
      }
      & li > a {
        @include links;
      }
      &__l, 
      .l {
        @include media('min', 'sm') { flex: 0 0 52%; }
        @include media('min', 'lg') { flex: 0 0 170px; }
      }
      &__r, 
      .r {
        flex: 1;
      }
    }
  }

  &__side-r,
  .side-r {
    &__contacts,
    .contacts {
      @include media('min', 'sm') { display: block; margin-bottom: 13px; }
      @include media('min', 'lg') { display: flex; margin-bottom: 17px; }
      position: relative;
      top: -6px;
      @include flex-jcr;

      &__tel {
        margin-right: 61px;
        @include media('min', 'sm') { margin-bottom: 20px; }
        @include media('min', 'lg') { margin-bottom: 0px; }
      }
      &__email {
        margin-right: 45px;
        @include media('min', 'sm') { margin-bottom: 20px; }
        @include media('min', 'lg') { margin-bottom: 0px; }
      }
      &__order-btn {
        position: relative;
        top: 1px;
        width: 191px;
        font-size: 14px;
      }
    }
    &__socials,
    .socials {
      @include media('min', 'sm') { }
      @include media('min', 'lg') {
        display: flex;
        gap: 26px;
      }
      & li > a {
        @include footer-txt;
      }
    }
  }
}
</style>