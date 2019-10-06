<template>
  <div id="home">
    Home
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
class Home extends Vue {
}

export default Home
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
}
</style>
