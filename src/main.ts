import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/style.scss'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data: {
    showNav: false
  },
  router,
  render: (h) => h(App)
}).$mount('#app')
