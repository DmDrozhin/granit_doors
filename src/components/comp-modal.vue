<template>
  <transition name="modal">
    <div 
      class="comp-modal modal" 
      v-if="isModalOn" 
      v-body-hidden="isModalOn"
      @click.capture="click($event)"
    >
      <div class="modal__slot">
        <slot @keydown.space="console.log('Press SPACER')"></slot>
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
      exceptions: ['modal__slot']
    }
  },
  methods: {
    ...mapActions('common', ['SET_MDW']),
    except(v) { return this.exceptions.includes(v)},

    click(ev) {if (this.except(ev.target.className)) this.SET_MDW(false) },
    // click(ev) { console.log(ev.target) },

    keyHandle(ev) { if (ev.key === 'Escape') this.SET_MDW(false) }
  },
  computed: {
    ...mapGetters('common', ['isModalOn']),
  },
  mounted() { window.addEventListener('keydown', (ev) => this.keyHandle(ev)) },
  beforeUnmount() {  window.removeEventListener('keydown', this.keyHandle()) }
}
</script>

<style lang="scss" scoped>
.comp-modal, .modal {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  @include modal;
  
  &__slot {
    width: 100%;
    height: 100vh;
    // border: 5px dotted rgb(217, 238, 27);
    pointer-events: auto;
    position: relative;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    z-index: 10;
    @include gpc;
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