<template>
  <div class="page dark-theme">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Navbar from '~/components/elements/Navbar.vue'
import Footer from '~/components/elements/Footer.vue'

@Component({
  components: {
    Navbar,
    Footer
  }
})
class DefaultTemplate extends Vue {
}

export default DefaultTemplate
</script>

<style lang="scss">
</style>
