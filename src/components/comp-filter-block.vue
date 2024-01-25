<template>
  <section class="comp-filter-block filters">
    <div class="filters__wrap">

      <div class="filters__main-btn">
        <ui-button-filters
          @titleButtonClick="isOpenBlock = !isOpenBlock"
          :isRolled="isOpenBlock"
        ></ui-button-filters>
      </div>

      <div class="filters__forms-wrapper" v-show="isOpenBlock">
        <form 
          class="filters__form form"
          id="form-sizes" 
          ref="sizes"
          autofocus  
          @submit.prevent
        >

          <fieldset class="form__field size" form="form-sizes">
            <legend class="form__legend">Размеры</legend>
            <ul class="form__filter-ul">
              <ui-input-check
                :key="56569131"
                class="form__check-inp"
                :setts="{ name: 'sizes', val: 1, labe: 'Все размеры' }"
                :isChecked="isAll"
                @handleCheck="resetSizes()"
              ></ui-input-check>
              <ui-input-check
                v-for="it in SETTS.size"
                :key="it.id"
                class="form__check-inp"
                :setts="{ name: 'sizes', val: it, labe: `${it} мм` }"
                :isChecked="false"
                @handleCheck="handleCheck($event, 'sizes')"
              ></ui-input-check>
            </ul>
  
          </fieldset>
        </form>
          
        <form 
          class="filters__form form" 
          id="form-add-options"
          ref="addOptions"
          @submit.prevent
        >
          <fieldset class="form__field purpose" form="form-add-options">
            <legend class="form__legend">Назначение двери</legend>
            <ul class="form__filter-ul">
              <ui-input-check
                class="form__check-inp"
                :setts="{ name: 'purposes', val: Object.keys(SETTS.purp)[0], labe: SETTS.purp.hm }"
                :isChecked="false"
                @handleCheck="handleCheck($event, 'purpose')"
              ></ui-input-check>
              <ui-input-check
                class="form__check-inp"
                :setts="{ name: 'purposes', val: Object.keys(SETTS.purp)[1], labe: SETTS.purp.out }"
                :isChecked="false"
                @handleCheck="handleCheck($event, 'purpose')"
              ></ui-input-check>
            </ul>
          </fieldset>
  
          <fieldset class="form__field contour" form="form-add-options">
            <legend class="form__legend">Контуров уплотнения</legend>
            <ul class="form__filter-ul">
              <ui-input-check
                class="form__check-inp"
                :setts="{ name: 'purposes', val: SETTS.cont[0], labe: `${SETTS.cont[0]} контура` }"
                :isChecked="false"
                @handleCheck="handleCheck($event, 'contour')"
              ></ui-input-check>
              <ui-input-check
                class="form__check-inp"
                :setts="{ name: 'purposes', val: SETTS.cont[1], labe: `${SETTS.cont[1]} контура` }"
                :isChecked="false"
                @handleCheck="handleCheck($event, 'contour')"
              ></ui-input-check>
            </ul>
          </fieldset>
  
          <fieldset class="form__field mirror" form="form-add-options">
            <div class="form__toggle-block toggle">
              <label for="toggle-mirror" class="toggle__labe">С зеркалом</label>
              <ui-button-toggle
                class="toggle__btn"
                :setts="{ name: 'purposes', val: door.hasMirror, idx: 'toggle-mirror' }"
                v-model:isOn="door.hasMirror"
              ></ui-button-toggle>
            </div>
          </fieldset>
  
          <fieldset class="form__field defects" form="form-add-options">
            <legend class="form__legend">Дополнительные особенности</legend>
            <ul class="form__filter-ul">
              <ui-input-check
                class="form__check-inp"
                v-for="(it, key, id) in SETTS.dfct"
                :key="key"
                :setts="{ name: 'add-options', val: Object.keys(SETTS.dfct)[id], labe: it }"
                :isChecked="false"
                @handleCheck="handleCheck($event, 'defects')"
              ></ui-input-check>
            </ul>
          </fieldset>
  
          <fieldset class="form__field submit">
            <div class="submit__ui-btn">
              <ui-button-filters-run
                @clicked="handleForm"
              ></ui-button-filters-run>
            </div>
            <div class="submit__reset">
              <input type="reset" class="submit__reset-inp" @click="resetAll">
            </div>
          </fieldset>
        </form>
      </div>

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
  data() {
    return{
      isOpenBlock: true,
      door: {
        sizes: [], // 1) picked sizes
        purpose: [], // 2) for flat of for house
        contour: [], // 3) qt of contours in door
        hasMirror: false, // 4) if true, has mirror option
        defects: [] // 5) door defects
      }
    }
  },
  watch: {
    isDesktop(v) { v ? this.isOpenBlock = true : this.isOpenBlock = false }
  },
  computed: {
    ...mapGetters('product', ['SETTS']),
    ...mapGetters('common', ['DEVICE']),
    isDesktop() { return this.DEVICE === 'desktop'},
    isAll() { return this.door.sizes && this.door.sizes.length > 0 ? false : true }
  },
  methods: {
    ...mapActions('product', ['SAVE_FILTERED_PRODS']),

    handleCheck(dt, name) {
      const arr = this.door[name]
      if (!arr.includes(dt.val) && dt.isChecked ) arr.push(dt.val)
      if (arr.includes(dt.val) && !dt.isChecked) arr.splice(arr.indexOf(dt.val), 1)
    },
    resetSizes() {
      if (!this.isAll) this.$refs.sizes.reset()
      this.door.sizes = []
    },
    resetAll() {
      if (!this.isAll) this.$refs.sizes.reset()
      this.$refs.addOptions.reset()
      for(const it in this.door) {
        let vl = this.door[it]
        if (Array.isArray(vl)) this.door[it] = []
        else if (typeof vl === 'boolean') this.door[it] = false
      }
      this.handleForm()
    },
    validateForm() {
      const isNot0 = [] // for arrays
      const isVal = [] // for booleans
      const dr = this.door
      for (const it in dr) {
        let vl = dr[it]
        if (Array.isArray(vl)) !vl.length ? isNot0.push(false) : isNot0.push(true)
        if (typeof vl === 'boolean') isVal.push(vl)
      }
      if (isNot0.includes(true) || isVal.includes(true)) return true
      else return false
    },

    handleForm() {
      const setts = JSON.parse(JSON.stringify(this.door))
      this.SAVE_FILTERED_PRODS(setts)
    }
  },
  created() {
  },
  mounted() {
    if (!this.isDesktop) this.isOpenBlock = false
    const setts = { sizes: [], purpose: [], contour: [], hasMirror: false, defects: [] }
    this.$store.dispatch('product/SAVE_FILTERED_PRODS', setts)
  }
}
</script>

<style lang="scss" scoped>
.comp-filter-block, .filters {
  width: 100%;
  // background-color: #d5f5e9; // tech
  &__wrap {
    // @include media('min', 'sm') { @include fc; }
    // @include media('min', 'lg') { @include fr; }
  }
  &__main-btn {
    @include media('min', 'sm') { pointer-events: all; }
    @include media('min', 'lg') { pointer-events: none; }
  }
  &__forms-wrapper {
    @include media('min', 'sm') { margin-top: 14px; }
    @include media('min', 'lg') { margin-top: 26px; }
  }
  &__form, .form {
    width: 100%;
    &__field.size {
      @include media('min', 'sm') { margin-bottom: 16px; }
      @include media('min', 'lg') { margin-bottom: 23px; }
    }
    &__field {
      width: 100%;
      @include media('min', 'sm') { margin-bottom: 16px; }
      @include media('min', 'lg') { margin-bottom: 40px; }
    }
    // &__field.contour { }
    // &__field.mirror { }
    &__field.defects {
      @include media('min', 'sm') { margin-bottom: 24px; }
      @include media('min', 'lg') { margin-bottom: 40px; }
    }
    &__legend {
      @include FT450-16;
      margin-bottom: 13px;
    }
    &__filter-ul {
      width: 100%;
    }
    &__check-inp {
      margin-bottom: 13px;
    }
    &__check-inp:last-child {
      margin-bottom: 0;
    }
    &__toggle-block, 
    .toggle {
      width: 100%;
      @include fr-sb-c;
      &__labe {  flex: 1; }
      &__btn {  }
    }
    &__field, .submit {
      width: 100%;
      @include media('min', 'sm') { @include fr-sb-c; gap: 18px; }
      @include media('min', 'lg') { display: block; }
      &__ui-btn {
        @include media('min', 'sm') { flex: 1; }
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