<template>
  <transition name="modal">
    <div
      class="comp-modal modal"
      v-if="isOn"
      v-body-hidden="isOn"
      @click.capture="click($event)"
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
  props: { unID: { type: String, default: '' } },
  data() {
    return{
      exceptions: ['modal__slot'],
      isStatusOpen: false,
    }
  },
  methods: {
    ...mapActions('common', ['SET_MODAL']),

    isException(v) { return this.exceptions.includes(v) },

    click(ev) {if (this.isException(ev.target.className)) this.SET_MODAL({ idx: this.unID, isOn: false }) },
    close() { this.SET_MODAL({ idx: this.unID, isOn: false }) },
    lg(ev) { console.log(ev)}
  },
  computed: {
    ...mapGetters('common', ['MODAL_STATUS']),
    isOn() { return this.MODAL_STATUS.idx === this.unID ? this.MODAL_STATUS.isOn : false },
  }
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