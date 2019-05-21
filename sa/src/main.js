import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
})

Vue.use(VueLazyload)
Vue.config.productionTip = false

Vue.filter('formatDate', value => moment(value).format('LL'))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')