import Vue from 'vue'
import App from './App.vue'
import store from '../store/store'

Vue.config.productionTip = false

// Tailwind CSS
import '@/assets/css/tailwind.css'

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
