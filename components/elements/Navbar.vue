<template>
  <nav
    class="navbar"
    role="navigation"
  >
    <Container>
      <div class="navbar-brand">
        <n-link
          to="/"
          class="navbar-item is-tab  is-hidden-desktop"
        >
          <img
            class="logo"
            src="~/assets/img/smallLogo.png"
            alt="BeatBoards"
          >
        </n-link>
        <a
          @click="isOpen = !isOpen"
          :class="{'is-active': isOpen}"
          role="button"
          class="navbar-burger"
          aria-label="menu"
        >
          <span />
          <span />
          <span />
        </a>
      </div>
      <div
        :class="{'is-active': isOpen}"
        class="navbar-menu"
      >
        <div class="navbar-start">
          <n-link
            to="/"
            class="navbar-item is-tab is-hidden-touch"
          >
            <img
              class="logo"
              src="~/assets/img/smallLogo.png"
              alt="BeatBoards"
            >
          </n-link>
          <n-link
            to="/about"
            class="navbar-item is-tab"
          >
            About
          </n-link>
        </div>
      </div>
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

  isOpen: boolean = false

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

  .logo {
    max-width: 34px;
  }

  // Overrides
  .navbar-menu {
    background-color: var(--background-accent);
    padding-bottom: 0px;
  }

  .navbar-burger {
    color: var(--text-on-background);
  }

  .navbar-item {
    color: var(--text-on-background);
    display: flex;
    align-items: center;

    &:hover, &:focus {
      background-color: var(--background-accent-secondary );
      border-bottom-color: var(--primary);
      color: var(--primary);
    }

    &.nuxt-link-exact-active {
      background-color: var(--background-accent-secondary );
      border-bottom: 2px solid var(--primary);
    }
  }
}
</style>
