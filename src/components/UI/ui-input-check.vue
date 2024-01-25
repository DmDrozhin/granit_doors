<template>
    <li class="ui-input-check li-check">
      <input 
        class="li-check__inp" 
        type="checkbox"
        :id="setts.val" 
        :value="setts.val"
        :name="setts.name"
        @change="handle($event)"
        :checked="isChecked"
      >
      <div class="li-check__icon-wrap">
        <ui-icon-check></ui-icon-check>
      </div>
      <label class="li-check__labe" :for="setts.val">{{ setts.labe }}</label>
    </li>
</template>

<script>
import uiIconCheck from '@/components/UI/svg-icons/ui-icon-check.vue'
export default {
  name: 'ui-input-check',
  components: { uiIconCheck },
  props: { 
    setts: { type: Object, default: () => {} },
    isChecked: { type: Boolean, required: true } 
  },
  data() {
    return{ }
  },
  computed: { },
  methods: {  
    handle(ev) {
      // console.log(ev)
      this.$emit('handleCheck', { val: ev.target.value, isChecked: ev.target.checked })
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-input-check, 
.li-check {
  width: 100%;
  @include fr-st-c;
  position: relative;
  &__icon-wrap {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid $grey-C3;
    background-color: $light;
    margin-right: 10px;
    @include fr-c-c;
  }
  &__inp {
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0;
  }
  &__inp:checked + &__icon-wrap {
    border: 1px solid $green-dk;
    background-color: $green-dk;
  }
  // &__inp:focus + &__icon-wrap {
  //   border: 1px solid $green-dk;
  //   background-color: $green-dk;
  // }
  &__labe {
    flex: 1;
    @include FT400-16;
    color: $dark-33;
  }
}


</style>