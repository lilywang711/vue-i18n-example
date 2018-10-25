// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable no-new */

import Vue from 'vue'
import App from './App'
import store from './store'
import i18n from './i18n/i18n'
Vue.config.productionTip = false

window.app = new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
