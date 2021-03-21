import Vue from 'vue'
import App from './App.vue'
import Axios from "axios"
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import store from './store'


import VueRouter from "vue-router"
import routes from "./routes"
const router = new VueRouter({mode: "history", routes})
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
