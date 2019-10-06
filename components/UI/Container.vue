<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
class Container extends Vue {
}
export default Container
</script>

<style lang="scss" scoped>
@import "~/assets/scss/breakpoints.scss";

.container {
  margin: 0 auto;

  // Mobile
  // max-width: 324px;

  // @include tablet {
  //   max-width: 672px;
  // }

  // Laptop
  @include laptop {
    max-width: 960px;
  }

  @media (min-width: $xlarge) {
    max-width: 1152px;
  }

  // Desktop
  @include desktop {
    max-width: 1344px;
  }
}
</style>
