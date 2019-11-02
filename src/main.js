import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
