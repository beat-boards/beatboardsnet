<template>
  <footer />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
class Footer extends Vue {
}

export default Footer
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--background);
  min-height: 56px;
}
</style>
