<template>
  <div id='app'>
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar v-model="active" id='tab-bar' v-show='$route.path!=="/detail"'>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/userInfo">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import Vue from 'vue';
import {
  Swipe,
  SwipeItem,
  Cell,
  CellGroup,
  Icon,
  Lazyload,
  Row,
  Col,
  Image,
  Grid,
  GridItem,
  Tabs,
  Tab,
  TabbarItem,
  Tabbar,
  NavBar,
  IndexBar,
  IndexAnchor,
  Tag,
  Badge,
  Divider,
  Button,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  Checkbox,
  CheckboxGroup,
  Card,
  SubmitBar,
} from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Button);
Vue.use(Divider);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Lazyload);
Vue.use(Row);
Vue.use(Col);
Vue.use(Image);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(TabbarItem);
Vue.use(Tabbar);
Vue.use(NavBar);
Vue.use(Tag);
Vue.use(Badge);

export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>

</style>
