<template>
  <div class="ui-button-opening opening">
    <ui-button-base @clicked="toggle">
      <template #icon>
        <ui-icon-door
          class="opening__icon"
          :style="{ transform: `scaleX(${side})` }"
        ></ui-icon-door>
      </template>
      <template #txt>
        <p class="opening__txt">{{ txt }}</p>
      </template>
    </ui-button-base>
  </div>
  
</template>

<script>
import uiButtonBase from './ui-button-base.vue'
import { mapGetters } from 'vuex'
export default {
  components: { uiButtonBase },
  name: 'ui-button-opening',
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
    txt () { return this.isChanged ? this.currProd.osd.L : this.currProd.osd.R },
    side () { return this.isChanged ? -1 : 1 }
  }

}
</script>

<style lang="scss" scoped>
.ui-button-opening, 
.opening {
  width: 100%;
  // border: 1px solid hotpink; // tech
  &__icon {
    @include media('min', 'sm') { width: 15px; }
    @include media('min', 'lg') { width: 19px; }
  }
  &__txt {
    @include FT400-16-14;
  }

}


</style>