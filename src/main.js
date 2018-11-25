// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import routes from './router/index.js'
import 'vue-material/dist/vue-material.min.css'


Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueFire)
Vue.config.productionTip = false


const router = new VueRouter ({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
