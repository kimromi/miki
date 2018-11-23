import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Root from '../layouts/root.vue'

export default new VueRouter({
  routes: [
    { path: '/', component: Root }
  ],
})
