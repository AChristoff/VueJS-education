import Vue from 'vue';
import App from './App.vue';
//HTTP requests library
import VueResource from 'vue-resource';
//HTTP

Vue.config.productionTip = false;

//HTTP requests library
Vue.use(VueResource);
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/';
//HTTP

//declaring global filter
// Vue.filter('reverse', function (value) {
//   return value.split('').reverse().join('');
// });


new Vue({
  render: h => h(App),
}).$mount('#app');


