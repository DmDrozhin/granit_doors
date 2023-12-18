<template>
  <button class="ui-button-main button">
    <div class="button__wrapper">
      <div class="button__icon-block icons">
        <ui-btn-shape
          class="icons__shape"
          :setts="shape"
        ></ui-btn-shape>

        <ui-icon-phone-lg
          class="icons__icon"
          :setts="icon"
        ></ui-icon-phone-lg>
      </div>
      <div class="button__txt-block">
          <p>{{ txt }}</p>
      </div>
    </div>
  </button>
  
</template>

<script>
export default {
  name: 'ui-button-main',
  props: {
    txt: { type: String, default: 'Оставить заявку' }
  },
  data() {
    return{
      shape: {
        width: 49,
        height: 44, 
        viewBox: '0 0 49 44',
        color: '#137039'
      },
      icon: { 
        width: 22, 
        height: 24,
        viewBox: '0 0 22 24',
        color: '#FFFFFF',
      },
    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.ui-button-main,
.button {
  min-width: 100%;
  height: 44px;
  // background-color: #c41a1a;
  &__wrapper {
    height: inherit;
    background-color: $green-lt;
    display: flex;
    border-radius: 8px;
  }
  &__icon-block, 
  .icons {
    position: relative;
    // width: 49px;
    &__shape {
      position: relative;
      top: 0;
      left: 0;
    }
    &__icon {
      position: absolute;
      top: calc(50% - 26px / 2);
      left: calc(50% - 28px / 2);
    }
  }
  &__txt-block {
    flex: 1;
    // position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    & p {
      text-align: left;
      @include button-txt;
      @include order-button-txt-shift;
    }
  }

}

</style>