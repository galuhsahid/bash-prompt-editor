// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VuePrism from 'vue-prism';
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(VuePrism)
import 'prismjs/themes/prism.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
