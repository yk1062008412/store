import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vant from 'vant';
import 'vant/lib/index.css';
import MyComponents from './components/index';
require('./mockdata');

Vue.use(Vant);
Vue.use(MyComponents);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
