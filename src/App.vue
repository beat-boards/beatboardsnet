

<template>
  <div id="app">
    <div id="nav">
      <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-head">
          <nav class="navbar">
            <div class="navbar-brand">
              

              <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav}">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div class="navbar-menu" :class="{ 'is-active': showNav }">
                <div class="navbar-end">
                  <a class="navbar-item" href="/about">About</a>
                  <a class="navbar-item" href="/global">Global</a>
                </div>

              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  </div>
</template>