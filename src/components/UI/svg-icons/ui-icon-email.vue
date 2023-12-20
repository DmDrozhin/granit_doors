<template>
<svg
  class="ui-icon-email"
  viewBox="0 0 30 30"
  fill="none"
  preserveAspectRatio="xMinYMid meet"
  xmlns="http://www.w3.org/2000/svg">
<circle
  cx="15"
  cy="15"
  r="15"
  :fill="setts.bg"
/>
  <path d="M22.5 10.5C22.5 9.675 21.825 9 21 9H9C8.175 9 7.5 9.675 7.5 10.5V19.5C7.5 20.325 8.175 21 9 21H21C21.825 21 22.5 20.325 22.5 19.5V10.5ZM21 10.5L15 14.2425L9 10.5H21ZM21 19.5H9V12L15 15.75L21 12V19.5Z" 
  :fill="setts.icn"/>
</svg>
</template>

<script>
export default {
  name: 'ui-icon-email',
  props: {
    setts: { 
      type: Object, 
      // eslint-disable-next-line vue/require-valid-default-prop
      default: { bg: '#137039', icn: '#fff' }
    }
  },
  data() {
    return { }
  },
  methods: { },
  computed: { }

}
</script>