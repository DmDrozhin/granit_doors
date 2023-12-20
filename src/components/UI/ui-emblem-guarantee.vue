<template>
  <div class="ui-emblem-guarantee emblem">
    <div class="emblem__wrapper">
      <div class="emblem__svg">
        <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_126_57)">
            <path
              d="M37.395 4.95372L22.5 0.0168457L7.605 4.95372C6.48276 5.32575 5.50628 6.04193 4.81425 7.00053C4.12223 7.95914 3.74985 9.11143 3.75 10.2937V22.5C3.75 36.6075 21 44.3981 21.7388 44.7225L22.4025 45.0168L23.0925 44.7881C23.835 44.5406 41.25 38.5818 41.25 22.5V10.2937C41.2502 9.11143 40.8778 7.95914 40.1857 7.00053C39.4937 6.04193 38.5172 5.32575 37.395 4.95372ZM23.3325 26.2293C23.0047 26.5593 22.6147 26.8209 22.185 26.9989C21.7553 27.1769 21.2945 27.2678 20.8294 27.2662H20.7675C20.2929 27.259 19.8247 27.1555 19.3913 26.9621C18.9578 26.7688 18.5681 26.4895 18.2456 26.1412L13.9219 21.6412L16.6275 19.05L20.835 23.4375L30.5494 13.7231L33.2006 16.3743L23.3325 26.2293Z"
              fill="white" />
          </g>
          <!-- <defs>
            <clipPath id="clip0_126_57">
              <rect width="45" height="45" fill="white" />
            </clipPath>
          </defs> -->
        </svg>
      </div>

      <p class="emblem__txt">Гарантия товара</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui-emblem-guarantee',
  data() {
    return { }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss" scoped>
.ui-emblem-guarantee,
.emblem {
  height: 124px;
  width: 119px;
  background-color: $green-75;
  border-radius: 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include media('min', 'sm') {
    height: 61.53px;
    width: 59.26px;
  }
  @include media('min', 'lg') {
    height: 124px;
    width: 119px;
  }
  &__wrapper {
    // border: 1px solid hotpink;
    padding: 5%;
  }

  &__svg {
    margin: 0 auto;
    height: auto;
    @include media('min', 'sm') {
      margin-bottom: -3%;
      width: 42%;
    }
    @include media('min', 'lg') {
      margin-bottom: 0%;
      width: 42%;
    }
  }

  &__txt {
    text-align: center;
    color: #fff;
    font-family: 'Inter 700';
    font-size: 86%;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: 0.3px;
    @include media('min', 'sm') {
      font-size: 40%;
    }

    @include media('min', 'lg') {
      font-size: 86%;
    }
  }
}
</style>
