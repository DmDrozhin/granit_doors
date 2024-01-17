<template>
  <button class="ui-button-door-size size" @click="toggle">
    <ui-button-base>
      <template #icon>
        <ui-icon-size
          class="size__icon"
          :style="{ transform: `scaleX(${side})` }"
        ></ui-icon-size>
      </template>
      <template #txt>
        <p class="size__txt">{{ txt }}</p>
      </template>
    </ui-button-base>
  </button>
  
</template>

<script>
import uiButtonBase from './ui-button-base.vue'
export default {
  components: { uiButtonBase },
  name: 'ui-button-door-size',
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
    passUp() { this.$emit('update:size', this.txt) }
  },
  computed: {    
    txt () { return this.isChanged ? this.prod.size.lg + 'mm' : this.prod.size.sm + 'mm' },
    side () { return this.isChanged ? -1 : 1 }
  },
  mounted() { this.passUp() }
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