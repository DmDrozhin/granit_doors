<template>
  <div class="ui-pagination pag">
      <div 
        class="pag__bullet bullet"

        :key="idx"
      >
        <input 
          class="bullet__inp" 
          name="pagination" 
          type="radio"
          :id="idx"
          :value="idx"
          @input="goTo(idx)"
          ref="bullet"
          v-model="val"
        >
        <label class="bullet__labe" :for="idx"></label>
      </div>

  </div>

</template>

<script>
export default {
  name: 'ui-pagination-bullet',
  props: {
    idx: { type: Number, default: 1 },
    slide: { type: Number, default: 1 },
  },
  data() {
    return{
      bullets: 8,
      val: 5
    }
  },
  watch: {
    
    slide(num) { if (num === this.idx) {
        console.log(num === this.idx)
        this.$nextTick( () => this.$refs.bullet.focus() )
      }
    } 
  },
  methods: {
    goTo(val) { this.$emit('goTo', val) }
  },

  computed: { 
    isChecked() { return this.val === this.inpValue ? true : false }
  },
  mounted() { if (this.idx === this.slide) {
        // console.log(num === this.idx)
        this.$nextTick( () => this.$refs.bullet.focus() )
      }
  }
}
</script>

<style lang="scss" scoped>
.ui-pagination, .pag {
  @include media('min', 'sm') { display: block; }
  @include media('min', 'lg') { display: none; }
  &__bullet, .bullet {
    position: relative;
    &__inp {
      opacity: 0;
    }
    &__inp:focus + .bullet__labe {
      $d: 8px;
      width: $d;
      height: $d;
      background-color: $grey-58;
    }
    &__labe {
      $d: 6px;
      position: absolute;
      top: 4px;
      left: 1px;
      display: block;
      width: $d;
      height: $d;
      border-radius: 50%;
      background-color: $grey-C3;
    }
  }

}
</style>