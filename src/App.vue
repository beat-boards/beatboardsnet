<template>
  <div id="app">
    <div id="nav">
      <nav
        class="navbar is-light has-shadow"
        role="navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <router-link to="/">
              <img src="./assets/smalllogo.png"
                   width="50"
                   height="25"
                   id="logo"
                   alt="BeatBoards">
            </router-link>
            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              @click="isOpen = !isOpen"
              :class="{'is-active': isOpen}"
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div class="navbar-menu"
               :class="{'is-active': isOpen}">
            <div class="navbar-start">
              <router-link
                to="/"
                class="navbar-item is-tab"
              >
                Home
              </router-link>
              <router-link
                to="/about"
                class="navbar-item is-tab"
              >
                About
              </router-link>
              <router-link
                to="/global"
                class="navbar-item is-tab"
              >
                Global
              </router-link>
            </div>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({})
  export default class App extends Vue {
    private isOpen: boolean = false
  }
</script>

<style
  lang="scss"
  scoped
>
  #logo {
    padding: 8px;
  }
</style>
