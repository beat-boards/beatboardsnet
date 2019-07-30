<template>
  <div class="home">
    
  </div>
</template>

<script lang="ts">
  import Home from '@/components/Home.vue' // @ is an alias to /src
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      Home
    }
  })
  export default class HomePage extends Vue {}
</script>
