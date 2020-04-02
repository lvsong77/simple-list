import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
