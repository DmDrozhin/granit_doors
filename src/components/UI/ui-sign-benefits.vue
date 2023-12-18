<template>
  <div class="ui-sign-benefits card">
    <div class="card__wrapper">
        <slot name="icon" class="card__slot-1"></slot>
        <slot name="txt" class="card__slot-2"></slot>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'ui-sign-benefits',
  data() {
    return{

    }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.ui-sign-benefits, 
.card {
  width: 119px;
  height: 124px;
  background-color: $green-75;
  border-radius: 27px;
  &__wrapper {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    padding: 0 .5rem;
  }
  &__slot-1 {
    
  }
  &__slot-2 {

  }
}
</style>
