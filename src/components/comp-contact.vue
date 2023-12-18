<template>
  <div class="comp-contact">
    <ui-icon-phone
      v-if="icon === 'phone'"
      :setts="{
        width: 30, 
        height: 30, 
        cx: 15, 
        cy: 15,
        r: 15,
        viewBox: '0 0 30 30', 
        color1: '#137039',
        color2: '#FFFFFF',
      }"
    ></ui-icon-phone>
    <ui-icon-email
      v-if="icon === 'email'"
      :setts="{
        width: 30, 
        height: 30, 
        cx: 15, 
        cy: 15,
        r: 15,
        viewBox: '0 0 30 30', 
        color1: '#137039',
        color2: '#FFFFFF',
      }"
    ></ui-icon-email>
    <p class="comp-contact__info">{{ contact }}</p>
  </div>
  
</template>

<script>

export default {
  name: 'comp-contact',
  props: {
    contact: { type: String, default: 'some info'},
    icon: { type: String, default: 'phone' }
  },
  data() {
    return{

    }
  },
  methods: {

  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
  .comp-contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 11px;
    &__info {
      @include contact;
    }
  }

</style>