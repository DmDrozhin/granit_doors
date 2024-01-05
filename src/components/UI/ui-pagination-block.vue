<template>
  <div class="ui-pagination pag">
    <div class="pag__wrap">
      <div 
        class="pag__bullet bullet"
        v-for="(it, idx) in length"
        :key="idx"
      >
        <input 
          class="bullet__inp" 
          name="pagination" 
          type="radio"
          :id="idx"
          :value="idx"
          @change="goTo(idx)"
          :checked="idx === slide.currArtId"
        >
        <label class="bullet__labe" :for="idx"></label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ui-pagination-block',
  props: { doorId: { type: Number, default: 0 } },
  data() {
    return{
    }
  },
  methods: {
    ...mapActions('product', ['SET_CURR_ARTICLE']),

    goTo(idx) {
      const d = { ...this.slide }
      d.currArtId = idx
      this.SET_CURR_ARTICLE(d)
    }
  },
  computed: {
    ...mapGetters('product', ['SLIDE_INFO', 'ARTS_ARR']),
    
    slide() { return this.SLIDE_INFO(this.doorId) },
    length() { return this.ARTS_ARR(this.doorId).length }
  }
}
</script>

<style lang="scss" scoped>
.ui-pagination, .pag {
  @include media('min', 'sm') { display: block; }
  @include media('min', 'lg') { display: none; }
  width: 100%;
  &__wrap {
    @include fr-ev-c;
    width: 100%;
  }
  &__bullet, .bullet {
    $d: 6px;
    $outline: 1px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &__inp {
      position: absolute;
      opacity: 0;
      width: $d;
      height: $d;
    }
    &__labe {
      display: block;
      width: $d;
      height: $d;
      border-radius: 50%;
      background-color: $grey-C3;
    }
    &__inp:checked + .bullet__labe {
      width: $d;
      height: $d;
      background-color: $grey-58;
      outline: $outline solid $grey-58;
    }
  }
}
</style>
