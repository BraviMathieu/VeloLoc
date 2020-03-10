import Vue from 'vue';
import Notifications from 'vue-notification';
import Darkmode from 'darkmode-js';
import App from './App.vue';

import router from './router';

new Darkmode().showWidget();
Vue.config.productionTip = false;
Vue.use(Notifications);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
