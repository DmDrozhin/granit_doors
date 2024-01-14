<template>
  <div class="ui-pagination pag">
    <div class="pag__wrap">
      <div 
        class="pag__bullet bullet"
        v-for="(it, idx) in prod.arts"
        :key="idx"
      >
        <input 
          class="bullet__inp" 
          :name="`pagination-${doorId}`"
          type="radio"
          :id="it"
          @change="goTo(idx)"
          :checked="idx === currSlideId"
        >
        <label class="bullet__labe" :for="it"></label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ui-pagination-block',
  props: {
    doorId: { type: Number, default: undefined },
    prod: { type: Object, default: () => {} } 
  },
  data() {
    return{
      currSlideId: '',
    }
  },
  watch: {
    activity(slide) { this.currSlideId = slide.currArtId }
  },
  computed: {
    ...mapGetters('product', ['SLIDE_INFO']),
    activity() { return this.SLIDE_INFO(this.doorId) }
  },
  methods: {
    ...mapActions('product', ['SET_CURR_SLIDE']),
    goTo(idx) {
      const d = {
        doorId: this.doorId,
        currArtId: idx,
        currArt: this.prod.arts[idx].art,
        currRal: this.prod.arts[idx].col1
      }
      this.SET_CURR_SLIDE(d)
    }
  },
  mounted() { this.currSlideId = this.SLIDE_INFO(this.doorId).currArtId }
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
