<template>
    <li class="ui-input-check check">
      <input 
        type="checkbox"
        class="check__inp" 
        :id="setts.val" 
        :value="setts.val"
        :name="setts.name"
        @change="handle($event)"
        :checked="setts.isChecked"
      >
      <div class="check__icon-wrap">
        <ui-icon-check></ui-icon-check>
      </div>
      <label class="check__labe" :for="setts.val">{{ setts.val }}</label>
    </li>
</template>

<script>
import uiIconCheck from '@/components/UI/svg-icons/ui-icon-check.vue'
export default {
  name: 'ui-input-check',
  components: { uiIconCheck },
  props: { setts: { type: Object, default: () => {} } },
  data() {
    return{

    }
  },
  methods: {
    
    handle(ev) {
      // console.log(ev)
      this.$emit('handleCheck', { val: ev.target.value, isChecked: ev.target.checked })
    }
  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
.ui-input-check, .check {
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
  &__labe {
    @include FT400-16;
    color: $dark-33;
  }
}


</style>