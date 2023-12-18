<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
.app {
  margin: 0 auto;
  @include general-width;
  @include container-paddings;
}

// nav {
//   a {
//     &.router-link-exact-active { }
//   }
// }
</style>
