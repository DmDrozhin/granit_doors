<template>
  <transition name="modal">
    <div
      class="comp-modal modal"
      ref="esc"
      tabindex="0"
      v-if="isOn"
      v-body-hidden="isOn"
      @click.capture="click($event)"
      @keyup.esc="close"
    >
      <div class="modal__slot">
        <slot name="preview"></slot>
        <slot name="callback"></slot>
        <slot name="order"></slot>
      </div>
  </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'comp-modal',
  props: { isOn: { type: Boolean, default: false } },
  data() {
    return{
      exceptions: ['modal__slot'],
    }
  },
  watch: {
    isOn(active) { if(active) { this.$nextTick(() => this.$refs.esc.focus() ) } }
  },
  methods: {
    ...mapActions('common', ['SET_MODAL']),
    isException(v) { return this.exceptions.includes(v) },
    click(ev) {if (this.isException(ev.target.className)) this.SET_MODAL(false) },
    close() { this.SET_MODAL(false) },
    // lg(ev) { console.log(ev) }
  }
}
</script>

<style lang="scss" scoped>
.comp-modal, .modal {
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  @include modal;
  // border: 5px dotted rgb(217, 238, 27); // tech
  overflow: hidden;
  
  &__slot {
    width: 100vw; // in vw to prevent left shift !
    height: 100%;
    pointer-events: auto;
    user-select: none;
    display: grid;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
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