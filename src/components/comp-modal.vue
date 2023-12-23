<template>
  <transition name="modal">
    <div 
      class="comp-modal modal"
      
      v-if="isModalOn"
    >
      <div class="modal__slot">
        <slot></slot>
      </div>
    
  </div>
  </transition>

  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'comp-modal',
  props: {  },
  data() {
    return{

    }
  },
  methods: {
    ...mapActions('common', ['SET_MDW']),
    handle() { this.SET_MDW(false) }
  },
  computed: {
    ...mapGetters('common', ['isModalOn'])
  }

}
</script>

<style lang="scss" scoped>
.comp-modal, .modal {
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  pointer-events: auto;
  overflow: hidden;
  @include modal;
  
  &__slot {
    position: relative;
    z-index: 60;
    // @include gpc;
  }

}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  scale: 25%;
}
.modal-enter-active,
.modal-leave-active {
  transition: all .3s ease-in-out;
}
</style>