<template>
  <div class="ui-pagination pag">
    <div class="pag__wrap">
      <div 
        class="pag__bullet bullet"
        v-for="(bullet, idx) in qt"
        :key="idx"
      >
        <ui-pagination-bullet
          :idx="idx"
          :slide="slide"
          @goTo="goTo($event)"
        ></ui-pagination-bullet>
      </div>
    </div>
  </div>

</template>

<script>
import uiPaginationBullet from '@/components/UI/ui-pagination-bullet.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ui-pagination',
  components: { uiPaginationBullet },
  data() {
    return{
    }
  },
  methods: {
    ...mapActions('product', ['SET_SLIDE']),

    goTo(val) {
      const d = { ...this.CURR_SLIDE }
      d.idx = val
      this.SET_SLIDE(d)
    }
  },
  computed: {
    ...mapGetters('product', ['CURR_SLIDE']),
  
    slide() { return this.CURR_SLIDE ? this.CURR_SLIDE.idx : 0 },
    qt() { return this.CURR_SLIDE ? this.CURR_SLIDE.qt : 5 }
  }
}
</script>

<style lang="scss" scoped>
.ui-pagination, .pag {
  margin-top: 5px;
  &__wrap {
    @include fr-c-c;
    gap: 12px;
  }
  // &__bullet, .bullet {
  //   position: relative;
  //   &__inp {
  //     opacity: 0;
  //   }
  //   &__inp:focus + .bullet__labe {
  //     background-color: grey;
  //   }
  //   &__labe {
  //     position: absolute;
  //     top: 4px;
  //     left: 1px;
  //     display: block;
  //     width: 10px;
  //     height: 10px;
  //     border-radius: 50%;
  //     background-color: rgb(202, 193, 193);
  //   }
  // }

}
</style>