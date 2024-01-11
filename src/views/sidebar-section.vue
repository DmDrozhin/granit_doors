<template>
  <section class="sidebar">
    <div class="sidebar__wrap">
      <comp-filter-block></comp-filter-block>
    </div>
  </section>
  
</template>

<script>
import compFilterBlock from '@/components/comp-filter-block.vue'
export default {
  name: 'sidebar-section',
  components: { compFilterBlock },
  data() {
    return{ }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  // border: 1px dotted indigo; // tech
  // width: 236px;
  @include media('min', 'sm') { padding: 0 0 0 0; }
  @include media('min', 'lg') { padding: 24px 20px 0 0; }
}
</style>
