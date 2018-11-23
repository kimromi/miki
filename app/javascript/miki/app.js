import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from './router'

Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    router: Router,
  })
})
