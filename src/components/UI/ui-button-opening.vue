<template>
  <button class="ui-button-opening opening" @click="toggle">
    <ui-button-base>
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
  </button>
  
</template>

<script>
import uiButtonBase from './ui-button-base.vue'
export default {
  components: { uiButtonBase },
  name: 'ui-button-opening',
  props: { 
    doorId: { type: Number, default: undefined }, 
    prod: { type: Object, default: () => {} } 
  },
  data() {
    return{
      isChanged: false
    }
  },
  methods: {
    toggle() {
      this.isChanged = !this.isChanged
      this.passUp()
    },
    passUp() {this.$emit('update:side', this.txt) }
    
  },
  computed: {
    txt () { return this.isChanged ? this.prod.side.L : this.prod.side.R },
    side () { return this.isChanged ? -1 : 1 }
  },
  mounted() { this.passUp() }
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