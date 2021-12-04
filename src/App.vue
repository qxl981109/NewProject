<template>
  <div id='app'>
    <Login />
  </div>
</template>

<script>
// eslint是开启的，写的时候注意规范
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
