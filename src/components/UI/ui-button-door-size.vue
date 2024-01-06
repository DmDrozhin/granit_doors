<template>
  <div class="ui-button-door-size size">
    <ui-button-base @clicked="toggle">
      <template #icon>
        <ui-icon-size
          class="size__icon"
        ></ui-icon-size>
      </template>
      <template #txt>
        <p class="size__txt">{{ txt }}</p>
      </template>
    </ui-button-base>
  </div>
  
</template>

<script>
import uiButtonBase from './ui-button-base.vue'
import { mapGetters } from 'vuex'
export default {
  components: { uiButtonBase },
  name: 'ui-button-door-size',
  props: { doorId: { type: Number, default: 0 } },
  data() {
    return{
      isChanged: false
    }
  },
  methods: {
    toggle() { this.isChanged = !this.isChanged }
  },
  computed: {
    ...mapGetters('product', ['PROD']),
    currProd() { return this.PROD(this.doorId) },
    txt () { return this.isChanged ? this.currProd.sz.lg + 'mm' : this.currProd.sz.sm + 'mm' }
  }

}
</script>

<style lang="scss" scoped>
.ui-button-door-size, 
.size {
  width: 100%;
  // border: 1px solid hotpink; // tech
  &__icon {
    @include media('min', 'sm') { width: 20px; }
    @include media('min', 'lg') { width: 24px; }
  }
  &__txt {
    @include FT400-16-14;
  }

}


</style>