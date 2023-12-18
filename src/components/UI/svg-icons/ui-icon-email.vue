<template>
<svg
  class="ui-icon-email"
  :width="setts.width"
  :height="setts.height"
  :viewBox="setts.viewBox"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">

<circle
  :cx="setts.cx"
  :cy="setts.cy"
  :r="setts.r"
  :fill="setts.color1"
/>

  <path d="M22.5 10.5C22.5 9.675 21.825 9 21 9H9C8.175 9 7.5 9.675 7.5 10.5V19.5C7.5 20.325 8.175 21 9 21H21C21.825 21 22.5 20.325 22.5 19.5V10.5ZM21 10.5L15 14.2425L9 10.5H21ZM21 19.5H9V12L15 15.75L21 12V19.5Z" 
  :fill="setts.color2"/>


</svg>

</template>

<script>
export default {
  name: 'ui-icon-email',
  props: {
    setts: { 
      type: Object, 
      // eslint-disable-next-line vue/require-valid-default-prop
      default: { 
        width: 30, 
        height: 30, 
        cx: 15, 
        cy: 15,
        r: 15,
        viewBox: '0 0 30 30', 
        color1: '#137039',
        color2: '#FFFFFF',
      },
    }
  },
  data() {
    return { }
  },
  methods: { },
  computed: { }

}
</script>