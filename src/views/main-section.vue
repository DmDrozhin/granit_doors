<template>
  <main class="main">
    <div>
      <compFilter></compFilter>
    </div>
    <div>
      <button 
        @click="doBtn"
        style="{border: 2px solid blue; background-color: orange; padding: 8px 25px; border-radius: 10px; }"
      >Open modal
      </button>
    </div>
    <!-- <div>
      <tmp-c></tmp-c>
    </div> -->
    <!-- <div>
      <slider></slider>
    </div> -->
    <div>
      <comp-prod-preview></comp-prod-preview>
    </div>


  </main>
  
</template>

<script>
import compFilter from '../components/comp-filter-select.vue'
import compProdPreview from '../components/comp-prod-preview.vue'
// import slider from '../components/comp-pop-slider.vue'
import { mapActions } from 'vuex'

export default {
  name: 'main-section',
  components: { compFilter, compProdPreview },
  // components: { compFilter, slider },
  data() {
    return{ }
  },
  methods: {
    ...mapActions('common', ['SET_MDW']),
    doBtn() {this.SET_MDW(true)}
  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.main {
  @include main;
  @include container-width;
  border: 1px solid peru;
}
  .btn {
    width: 191px;
    height: 44px;
  }

</style>