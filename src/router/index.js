import Vue from 'vue';
import Router from 'vue-router';
import Terminal from '@/components/Terminal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Terminal,
    },
  ],
});
