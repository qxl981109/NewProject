<template>
  <div id='app'>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" />
    </van-cell-group>
    <Login />
  </div>
</template>

<script>
// eslint是开启的，写的时候注意规范
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

const Login = () => import('@/views/Login/index.vue');

export default {
  components: {
    Login,
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
  },
};
</script>

<style>

</style>
