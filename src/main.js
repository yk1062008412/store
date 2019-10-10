import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MyComponents from './components/index';
require('./mockdata');

Vue.use(MyComponents);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
