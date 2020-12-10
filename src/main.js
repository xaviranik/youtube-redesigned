import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from "./router";
import VueProgressBar from 'vue-progressbar'

// Vue Progessbar
Vue.use(VueProgressBar, {
  color: 'rgb(220, 38, 38)',
  failedColor: 'red',
  height: '4px'
})

Vue.config.productionTip = false

// Tailwind CSS
import '@/assets/css/tailwind.css'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
