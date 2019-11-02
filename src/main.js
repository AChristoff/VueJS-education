import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import { routes } from './routes'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const router = new VueRouter ({
  mode: 'history',
  routes,
});

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);



Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
