// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './Vuex/Store'
import HeaderSlot from './components/HeaderSlot/headerslot'
import Split from './components/Split/split'
import './mockData/mockServer'
import './filter'
Vue.component('HeaderSlot',HeaderSlot);
Vue.component('Split', Split);
Vue.config.productionTip = false


Vue.store = store
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:createElement=>createElement(App),
  router,
  store
})
