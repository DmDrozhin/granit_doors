<template>
  <section class="footer-section footer">
    <div class="footer__container">
      <div class="footer__wrapper">
        <div class="footer__side-l side-l">
          <div class="side-l__title-block title-block">
            <div class="title-block__wrapper">

              <div class="title-block__logo">
                <ui-icon-logo :setts="logo"></ui-icon-logo>
              </div>

              <h2 class="title-block__site-title title">
                <span class="title__wrapper">
                  <span class="title__part-1">{{ title.logo[0] }}</span>
                  <span class="title__part-2">{{ title.logo[1] }}</span>
                </span>
              </h2>

            </div>
            <p class="title-block__txt">{{ title.txt }}</p>

          </div>
          <div class="side-l__links links">
            <ul class="links__l l">
              <li><a :href=links.l1.link>{{ links.l1.txt }}</a></li>
              <li><a :href=links.l2.link>{{ links.l2.txt }}</a></li>
              <li><a :href=links.l3.link>{{ links.l3.txt }}</a></li>
            </ul>
            <ul class="links__r r">
              <li><a :href=links.l4.link>{{ links.l4.txt }}</a></li>
              <li><a :href=links.l5.link>{{ links.l5.txt }}</a></li>
              <li><a :href=links.l6.link>{{ links.l6.txt }}</a></li>
            </ul>
          </div>

        </div>
        <div class="footer__side-r side-r">
          <div class="side-r__contacts contacts">
            <a :href="`tel:${contacts.tel}`">
              <ui-comp-info class="contacts__tel" 
              :setts="{
                  txt: contacts.tel,
                  txtCl: '#fff',
                  icn: 'tel',
                  icnCl: '#fff',
                  icnBg: '#137039'
                }"
              ></ui-comp-info>
            </a>
            <a :href="`mailto:${contacts.email}`">
              <ui-comp-info class="contacts__email" 
                :setts="{
                  txt: 'info@corp.com',
                  txtCl: '#fff',
                  icn: 'email',
                  icnCl: '#fff',
                  icnBg: '#137039'
                }"
              ></ui-comp-info>
            </a>

            <div class="contacts__order-btn">
              <ui-order-button-footer></ui-order-button-footer>
            </div>
          </div>
          <ul class="side-r__socials socials">
            <li class="socials__1"><a href="#">{{ socials.fb }}</a></li>
            <li class="socials__2"><a href="#">{{ socials.tg }}</a></li>
            <li class="socials__3"><a href="#">{{ socials.vb }}</a></li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import uiOrderButtonFooter from '@/components/UI/ui-order-button-footer.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'footer-section',
  components: { uiOrderButtonFooter },
  data() {
    return {
      logo: { col1: '#fff', col2: '#fff', col3: '#fff' }
    }
  },
  methods: { },
  computed: {
    ...mapGetters('company', ['title', 'contacts', 'links', 'socials']),
  }
}
</script>

<style lang="scss" scoped>
.footer-section, .footer {
  @mixin footer-txt { font-family: 'Futura PT 400'; font-size: 0.875rem; color: $light; }
  width: 100%;
  height: 100%;
  margin: 0 auto;
  &__container {
    // border: 1px solid yellow; // tech
    border-radius: 27px 27px 0 0;
    background-color: $green-lt;
    @include media('min', 'sm') { width: 320px; min-height: 568px; margin: 0 -10px; }
    @include media('min', 'lg') { width: 1440px; min-height: 146px; margin: 0 -20px; }
  }
  &__wrapper {
    // border: 1px solid coral; // tech
    margin: 0 auto;
    height: inherit;
    @include media('min', 'sm') { width: 300px; padding: 43.5px 0 30px 0; @include fc; }
    @include media('min', 'lg') { width: 1396px; padding: 21px 0 23px 0; @include fr; }
  }

  &__side-l, .side-l {
    @include media('min', 'sm') { display: block; }
    @include media('min', 'lg') { @include fr-sb; flex: 0 0 714px; }
    &__title-block, .title-block {
      // border: 1px solid coral; // tech
      @include media('min', 'sm') { width: 250px; margin-bottom: 32px; } //***//
      @include media('min', 'lg') { width: 353px; margin-bottom: 0; }
      &__wrapper { // Logo wrapper
        // border: 1px solid rgb(80, 106, 255); // tech
        @include media('min', 'sm') { margin-bottom: 29px; }
        @include media('min', 'lg') { margin-bottom: 16px; }
        @include fr-st-c;
      }
      &__logo { // SVG
        position: relative;
        @include media('min', 'sm') { width: 15.5px; margin-right: 6px; }
        @include media('min', 'lg') { width: 21px; margin-right: 10px; top: 2px; left: 2px; }
      }
      &__site-title, .title {
        &__wrapper { @include prev-slct; }
        &__part-1 {
          @include IntroDemo-32-21;
          color: $light;
          @include media('min', 'sm') { margin-right: 5px; letter-spacing: .4px; }
          @include media('min', 'lg') { margin-right: 8px; letter-spacing: 0px; }
        }
        &__part-2 {
          @include IntroDemo-32-21;
          color: $light;
          @include media('min', 'sm') { letter-spacing: .4px; }
          @include media('min', 'lg') { letter-spacing: 0px; }
        }
      }
      &__txt {
        @include prev-slct;
        @include footer-txt;
        // padding-right: 75px;
        max-width: 277px;
      }
    }
    &__links,
    .links {
      @mixin links { font-family: 'Inter 700'; font-size: 0.875rem; color: $light; } // 14
      // border: 1px solid indianred;
      @include fr;
      @include media('min', 'sm') { flex: 1 1 100%; margin: 0 0 36px 0; }
      @include media('min', 'lg') { flex: 1 0 248px; margin: 12px 0 0 0; }
      // gap: 35px;
      & li { margin-bottom: 10.5px; }
      & li:last-child { margin-bottom: 0; }
      & li> a { @include links; }

      &__l, .l {
        @include media('min', 'sm') { flex: 0 0 51.5%; }
        @include media('min', 'lg') { flex: 0 0 170px; }
      }
      &__r, .r { flex: 1; }
    }
  }

  &__side-r, .side-r {
    flex: 1;
    // border: 1px solid lawngreen; // tech
    margin: 3px -2px 0 0;
    &__contacts, .contacts {
      @include media('min', 'sm') { display: block; margin-bottom: 13px; }
      @include media('min', 'lg') { @include fr-nd-c; margin-bottom: 28px; }
      &__tel {
        margin-right: 61px;
        @include media('min', 'sm') { margin: 0 0 20px 0; }
        @include media('min', 'lg') { margin: 0 61px 0 0; }
      }
      &__email {
        margin-right: 45px;
        @include media('min', 'sm') { margin: 0 0 22px 0; }
        @include media('min', 'lg') { margin: 0 46px 0 0; }
      }
      &__order-btn {
        width: 191px;
        @include media('min', 'sm') { margin: 0 0 23px 0; }
        @include media('min', 'lg') { margin: 0 0 0 0; }
      }
    }

    &__socials,
    .socials {
      @include media('min', 'sm') { display: block; }
      @include media('min', 'lg') { display: flex; gap: 26px; }
      & li> a { @include footer-txt; }
    }
  }
}
</style>