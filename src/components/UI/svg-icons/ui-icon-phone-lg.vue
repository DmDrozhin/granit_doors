<template>
  <svg
    class="ui-icon-phone-lg"
    viewBox="0 0 22 24" 
    preserveAspectRatio="xMidYMid meet" 
    fill="none"
    display="flex"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.42444 10.1948C6.18444 13.8984 9.02 16.9215 12.4789 18.8191L15.1678 15.94C15.4978 15.5866 15.9867 15.4688 16.4144 15.6259C17.7833 16.1101 19.2622 16.3718 20.7778 16.3718C21.45 16.3718 22 16.9608 22 17.6805V22.2479C22 22.9677 21.45 23.5566 20.7778 23.5566C9.30111 23.5566 0 13.5974 0 1.3087C0 0.588915 0.55 0 1.22222 0H5.5C6.17222 0 6.72222 0.588915 6.72222 1.3087C6.72222 2.94458 6.96667 4.51502 7.41889 5.98076C7.55333 6.43881 7.45555 6.9492 7.11333 7.31563L4.42444 10.1948Z"
      :fill="setts.icnCol" />
  </svg>
</template>

<script>
export default {
  name: 'ui-icon-phone-lg',
  props: {
    setts: { type: Object, default: () => {} }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="scss" scoped></style>
