import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './home.vue'
import Contact from './contact.vue'
import Featured from './destacados.vue'
import Restaurants from './restaurants.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/featured-id/:id', name: '/featured-id', component: Featured},
  {path: '/featured', component: Featured},
  {path: '/restaurants', component: Restaurants},
  {path: '/contact', component: Contact},
  {path: '/home', component: Home},
  {path: '/', component: Home}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.component('home', Home);
Vue.component('contact', Contact)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
