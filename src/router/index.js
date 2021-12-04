import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/views/Home.vue');
const Cart = () => import('@/views/Cart.vue');
const UserInfo = () => import('@/views/UserInfo.vue');
const CateGory = () => import('@/views/cateGory.vue');
const Detail = () => import('@/views/Detail.vue');

const routes = [
  {
    path: '/',
    component: Home,
  }, {
    path: '/cart',
    component: Cart,
  }, {
    path: '/userinfo',
    component: UserInfo,
  }, {
    path: '/category',
    component: CateGory,
  }, {
    path: '/detail',
    component: Detail,
  },
];

const router = new VueRouter({ routes });

// 每次路由跳转，都把滚动条拉到最顶。
router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0;
  next();
});

export default router;
