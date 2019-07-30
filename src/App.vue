<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar is-light has-shadow" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a href="/"><img src="./assets/smalllogo.png" width="50" height="25" style="padding: 3px;"></a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
              <div class="navbar-start">
                  <router-link to="/" class="navbar-item is-tab">Home</router-link>
                  <router-link to="/about" class="navbar-item is-tab">About</router-link>
                  <router-link to="/global" class="navbar-item is-tab">Global</router-link>
              </div>
          </div>
          </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>

<style>
  html {
    overflow-y: auto
  }
</style>