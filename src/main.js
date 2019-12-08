import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import axiosPlugin from './plugins/axiosPlugin';
import {authenticate} from "./services/authServices";
import {store} from '@/store/store';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(axiosPlugin);

Vue.mixin(authenticate);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
