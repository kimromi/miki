import Vue from 'vue'
import Router from './router'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    router: Router,
  })
})
