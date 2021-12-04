import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './style/style.less';

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
