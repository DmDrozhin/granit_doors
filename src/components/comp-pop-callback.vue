<template>
  <div class="comp-pop-callback callback">
    <hgroup class="callback__wrap">
      <h3 class="callback__title">{{ title }}</h3>
      <p class="callback__bub-title">{{ sub }}</p>
    </hgroup>
    <form class="callback__form from">
        <div class="form-wrap">
          <ui-input-text></ui-input-text>
        </div>
    </form>
  </div>
  
</template>

<script>
import uiInputText from '@/components/UI/ui-input-text.vue'
export default {
  name: 'comp-pop-callback',
  components: { uiInputText, },
  data() {
    return{
      title: 'оставь заявку и получи полный прайс на наш каталог',
      sub: 'от известных производителей'
    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>


</style>