import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import axiosPlugin from './plugins/axiosPlugin'

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(axiosPlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
