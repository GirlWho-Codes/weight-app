import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter  from 'vue-router'
import Routes from './routes'

import { BootstrapVue, BootstrapVueIcons, BCarousel, BCarouselSlide, BButton, BIconBarChartLine, BIconBarChartLineFill  } from 'bootstrap-vue'
import { CarouselPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(CarouselPlugin)

Vue.use(VueResource)
Vue.use(VueRouter)

library.add(faCoffee)

Vue.component('b-carousel', BCarousel)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('b-button', BButton)
Vue.component('b-icon-bar-chart-line', BIconBarChartLine)


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
  
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
