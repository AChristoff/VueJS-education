import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

//declaring global filter
// Vue.filter('reverse', function (value) {
//   return value.split('').reverse().join('');
// });


new Vue({
  render: h => h(App),
}).$mount('#app');
