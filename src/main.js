import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import './assets/styles/styles.scss'

// createApp(App).mount('#app')
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
