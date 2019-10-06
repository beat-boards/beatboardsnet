<template>
  <div id="about">
    About
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
class About extends Vue {
}

export default About
</script>

<style lang="scss" scoped>
#about {
  height: 100%;
}
</style>
