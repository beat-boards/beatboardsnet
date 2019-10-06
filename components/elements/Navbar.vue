<template>
  <nav>
    <Container>
      <img src="~/assets/img/smallLogo.png" alt="Beat boards logo">
    </Container>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Container from '~/components/UI/Container.vue'

// interface User {
//   firstName: string
//   lastName: number
// }

@Component({
  components: {
    Container
  }
})
class Navbar extends Vue {
  // @Prop({ type: Object, required: true }) readonly user!: User

  // message: string = 'This is a message'

  // get fullName (): string {
  //   return `${this.user.firstName} ${this.user.lastName}`
  // }
}

export default Navbar
</script>

<style lang="scss" scoped>
nav {
  background-color: var(--background-accent);
  min-height: 56px;

  > * {
    min-height: 56px;

    display: flex;
    // justify-content: center;
    align-items: center;
  }

  img {
    max-width: 34px;
  }
}
</style>
