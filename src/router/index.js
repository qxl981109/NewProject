import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Cart from '@/views/Cart.vue';
import UserInfo from '@/views/UserInfo.vue';
import CateGory from '@/views/cateGory.vue';
import Detail from '@/views/Detail.vue';

Vue.use(VueRouter);
// const haizi = {
//   path: '',
// };
const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  }, {
    path: '/cart',
    component: Cart,
    name: 'cart',
  }, {
    path: '/userinfo',
    component: UserInfo,
    name: 'userinfo',
  }, {
    path: '/category',
    component: CateGory,
    name: 'category',
  }, {
    path: '/detail',
    component: Detail,
    name: 'detail',
    // children: haizi,
  },
];

const router = new VueRouter({ routes });

export default router;
