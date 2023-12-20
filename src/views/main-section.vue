<template>
  <main class="main">
    <div>
      <compFilter></compFilter>
    </div>


  </main>
  
</template>

<script>
import compFilter from '../components/comp-filter-select.vue'
export default {
  name: 'main-section',
  components: { compFilter },
  data() {
    return{ }
  },
  methods: {

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