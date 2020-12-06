import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Tailwind CSS
import '@/assets/css/tailwind.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
