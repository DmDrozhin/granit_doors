<template>
  <section class="comp-filter-block filters">
    <div class="filters__wrap">

      <div class="filters__main-btn">
        <ui-button-filters></ui-button-filters>
      </div>

      <form 
        class="filters__form form" 
        id="form-sizes" 
        ref="sizes" 
        autofocus  
        @submit.prevent
      >
        <fieldset class="form__field" form="form-sizes">
          <legend class="form__legend">Размеры</legend>
          <ul>
            <ui-input-check
              class="form__check-inp"
              :setts="{ name: 'sizes', val: 'Все размеры', isChecked: isAllSizes }"
              @handleCheck="isAllSizes = !isAllSizes"
            ></ui-input-check>
            <ui-input-check
              v-for="it in SETTS.size"
              :key="it.id"
              class="form__check-inp"
              :setts="{ name: 'sizes', val: `${it} мм`, isChecked: undefined }"
              @handleCheck="handleSizes($event, 'sizes')"
            ></ui-input-check>
          </ul>

        </fieldset>
      </form>
        
      <form 
        class="filters__form form" 
        id="form-add-options"  
        @submit.prevent
      >
        <fieldset class="form__field purpose" form="form-add-options">
          <legend class="form__legend">Назначение двери</legend>
          <ul>
            <ui-input-check
              class="form__check-inp"
              :setts="{ name: 'purposes', val: SETTS.purp.hm, isChecked: undefined }"
              @handleCheck="handleCheck($event, 'purpose')"
            ></ui-input-check>
            <ui-input-check
              class="form__check-inp"
              :setts="{ name: 'purposes', val: SETTS.purp.out, isChecked: undefined }"
              @handleCheck="handleCheck($event, 'purpose')"
            ></ui-input-check>
          </ul>
        </fieldset>

        <fieldset class="form__field contour" form="form-add-options">
          <legend class="form__legend">Контуров уплотнения</legend>
          <ul>
            <ui-input-check
              class="form__check-inp"
              :setts="{ name: 'purposes', val: SETTS.cont[0], isChecked: undefined }"
              @handleCheck="handleCheck($event, 'contour')"
            ></ui-input-check>
            <ui-input-check
              class="form__check-inp"
              :setts="{ name: 'purposes', val: SETTS.cont[1], isChecked: undefined }"
              @handleCheck="handleCheck($event, 'contour')"
            ></ui-input-check>
          </ul>
        </fieldset>

        <fieldset class="form__field mirror" form="form-add-options">
          <div class="form__toggle-block toggle">
            <label for="toggle">С зеркалом</label>
            <ui-button-toggle
              :setts="{ name: 'purposes', val: SETTS.adds.mirr, isOn: hasMirror }"
              @toggled="toggle($event)"
            ></ui-button-toggle>
          </div>
        </fieldset>

        <fieldset class="form__field defects" form="form-add-options">
          <legend class="form__legend">Дополнительные особенности</legend>
          <ul>
            <ui-input-check
              class="form__check-inp"
              v-for="(it, idx) in SETTS.dfct"
              :key="idx"
              :setts="{ name: 'add-options', val: it, isChecked: undefined }"
              @handleCheck="handleCheck($event, 'adds')"
            ></ui-input-check>
          </ul>
        </fieldset>

        <fieldset class="form__field submit">
          <div class="submit__ui-btn">
            <ui-button-filters-run
              @clicked="handleForm()"
            ></ui-button-filters-run>
          </div>
          <div class="submit__reset">
            <input type="reset" class="submit__reset-inp" @click="resetAll()">
          </div>
        </fieldset>
      </form>

    </div>
  
  </section>
</template>

<script>

import uiButtonFilters from '@/components/UI/ui-button-filters.vue'
import uiInputCheck from '@/components/UI/ui-input-check.vue'
import uiButtonToggle from '@/components/UI/ui-button-toggle.vue'
import uiButtonFiltersRun from '@/components/UI/ui-button-filters-run.vue'

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'comp-filter-block',

  components: { uiButtonFilters, uiInputCheck, uiButtonToggle, uiButtonFiltersRun },
  props: { doorId: { type: Number, default: undefined } },
  data() {
    return{
      isAllSizes: true, // 1) if true, ignore - pickedSizes array
      sizes: [], // 1) picked out sizes
      purpose: [], // 2) for flat of for house
      contour: [], // 3) qt of conturs of 
      hasMirror: false, // 4) if true, mirror option is picked out
      adds: [] // 5) picked out add options
    }
  },
  watch: {
    isAllSizes(v) {
      if (v) { 
        this.sizes = []
        this.$refs.sizes.reset()
      }
    }
  },
  computed: {
    ...mapGetters('product', ['SETTS'])
    // keyId() { return Math.random().toString(16).slice (2) }
  },
  methods: {
    ...mapActions('product', ['SET_RPOD_FILTER']),

    toggle(ev) { this.hasMirror = ev },

    handleSizes(dt) {
      const arr = this.sizes
      if (!arr.includes(dt.val) && dt.isChecked ) {
        arr.push(dt.val)
        this.isAllSizes = false
      }
      if (arr.includes(dt.val) && !dt.isChecked) arr.splice(arr.indexOf(dt.val), 1)
      if (arr.length === 0) this.isAllSizes = true
    },
    handleCheck(dt, name) {
      const arr = this[name]
      if (!arr.includes(dt.val) && dt.isChecked ) arr.push(dt.val)
      if (arr.includes(dt.val) && !dt.isChecked) arr.splice(arr.indexOf(dt.val), 1)
    },
    clearArr(ar) { ar.forEach(it => this[it] = []) },
    resetAll() {
      this.$refs.sizes.reset()
      this.clearArr(['sizes', 'purpose', 'contour', 'adds'])
      this.hasMirror = false
      this.isAllSizes = true
    },
    handleForm() {
      const isNot0 = [] // for arrays
      const isVal = [] // for booleans
      for(const it in this.$data) {
        const vl = this.$data[it]
        if (Array.isArray(vl)) !vl.length ? isNot0.push(false) : isNot0.push(true)
        if (typeof vl === 'boolean') isVal.push(vl)
      }
      if (isNot0.includes(true) || isVal.includes(true)) {
        const setts = {...this.$data}
        this.SET_RPOD_FILTER(setts)
        // console.log('OK')
      } else alert('There is nothing to filter')
    }
  },
}
</script>

<style lang="scss" scoped>
.comp-filter-block, .filters {
  &__wrap {
    // @include media('min', 'sm') { @include fc; }
    // @include media('min', 'lg') { @include fr; }
  }
  &__main-btn {
    margin-bottom: 26px;
  }
  &__form, .form {
    &__field {
      margin-bottom: 23px;
    }
    &__field.purpose {
      margin-bottom: 40px;
    }
    &__field.contour {
      margin-bottom: 40px;
    }
    &__field.mirror {
      margin-bottom: 40px;
    }
    &__field.defects {
      margin-bottom: 40px;
    }
    &__legend {
      @include FT450-16;
      margin-bottom: 13px;
    }
    &__check-inp {
      margin-bottom: 13px;
    }
    &__check-inp:last-child {
      margin-bottom: 0;
    }
    &__toggle-block, .toggle {
      @include fr-sb-c;
      &__labe {

      }
      &__btn {
        width: 39px;
        height: 22px;
        border-radius: 23px;
      }
    }
    &__field, .submit {
      width: 100%;
      @include media('min', 'sm') { @include fr-sb-c; gap: auto; }
      @include media('min', 'lg') { display: block; }
      &__ui-btn {
        margin-bottom: 6px;
      }
      &__reset {
        text-align: center;
      }
      &__reset-inp {
        @include FT400-16;
        color: $grey-C3;
        background-color: transparent;
      }
    }
  }
}


</style>