<template>
  <main class="main">
    <div>
      <compFilter></compFilter>
    </div>
    <div>
      <button 
        @click="doBtn" 
        style="{border: 2px solid blue; background-color: orange; padding: 8px 25px; border-radius: 10px; }"
      >Modal</button>
    </div>


  </main>
  
</template>

<script>
import compFilter from '../components/comp-filter-select.vue'
import { mapActions } from 'vuex'
export default {
  name: 'main-section',
  components: { compFilter },
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
  .btn {
    width: 191px;
    height: 44px;
  }

</style>