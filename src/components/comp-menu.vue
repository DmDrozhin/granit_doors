<template>
  <menu class="menu">
    <div class="menu__container">
      <div class="menu__name-block name-block">
        <div class="name-block__wrapper">
          <div class="name-block__icon">
            <!-- <img src="../assets/svg/main-logo.svg" alt="Site logo"> -->
            <ui-icon-logo
              :setts="logo"
            ></ui-icon-logo>
          </div>
          <h1 class="name-block__site-title title">
            <span class="title__wrapper">
              <span class="title__part-1">{{ part1 }}</span>
              <span class="title__part-2">{{ part2 }}</span>
            </span>
          </h1>
        </div>
      </div>
      <div class="menu__contact-block contact-block">
        <div class="contact-block__phone phone">
          <comp-contact
            class="phone__comp"
            :contact="'+38 (097) 555-88-77'"
            :icon="'phone'"
          ></comp-contact>
        </div>
        <div class="contact-block__email email">
          <comp-contact
            class="email__comp"
            :contact="'info@corp.com'"
            :icon="'email'"
          ></comp-contact>
        </div>
        <div class="contact-block__order-btn">
          <ui-button-main></ui-button-main>
        </div>
      </div>
    </div>
  </menu>
</template>

<script>

export default {
  name: 'menu-section',
  data() {
    return {
      logo: {
        width: 21,
        height: 52, 
        width2: 21,
        height2: 47, 
        viewBox: '0 -2 21 47',
        color1: '#333333',
        color2: '#12AB51',
        color3: '#333333'
      },
      part1: 'двери',
      part2: 'гранит'
    }
  }
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
        justify-content: start;
        align-items: center;
        // gap: .5rem;
      }
      &__icon {
        margin-right: .55rem;
      }
      &__site-title, 
      .title {
        height: $nav-height;
        &__wrapper {
          height: inherit;
          height: $nav-height;
          @include flex-title;
        }
        &__part-1 {
        @include site-title;
          color: $green-lt;
          margin-right: 0.5rem;
        }
        &__part-2 {
          @include site-title;
          color: $green-dk;
        }
      }

    }
    &__contact-block,
    .contact-block {
      @include flex-jcsb;
      &__phone, 
      .phone {
        margin-right: 61px;
        @include display-mode;
      }
      &__email,
      .email {
        margin-right: 46px;
        @include display-mode;
      }
      &__order-btn {
        // background-color: #f1bfbf;
        display: flex;
        position: relative;
        top: 0px;
        @include order-button;

      }
    }
  }
  

  
</style>
