<template>
  <div id='home'>
    <div class='top-bar'>蘑菇街</div>
    <div class='swiper'>
      <van-swipe :autoplay='3000'>
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src='image' />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-grid id="recommend" >
      <van-grid-item v-for='(image, i) in recomment' :key='i'>
        <van-image round :src="image"/>十点抢券
      </van-grid-item>
    </van-grid>
    <div id='feature'>
      <h3>本周流行</h3>
      <van-grid :column-num='4'>
        <van-grid-item v-for='(image, i) in [...recomment,...recomment]' :key='i'>
          <van-image round :src="image"/>十点抢券
        </van-grid-item>
      </van-grid>
    </div>
    <div class='goods-list'>
      <van-tabs sticky>
        <van-tab class='tab-content' v-for="name in tabNames" :key='name' :title="name">
          <van-row gutter="10">
            <van-col span='12' @click='$router.push("/detail")'>
              <img src="http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_320x999.jpg" alt="">
              <p class='van-ellipsis'>2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装</p>
              <div class='comment'>
                <span class='price'>￥59.00</span>
                <van-icon name="star-o" />
                <span class='star-num'>78</span>
              </div>
            </van-col>
            <van-col span='12' @click='$router.push("/detail")'>
              <img src="http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_320x999.jpg" alt="">
              <p class='van-ellipsis'>2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装</p>
              <div class='comment'>
                <span class='price'>￥59.00</span>
                <van-icon name="star-o" />
                <span class='star-num'>78</span>
              </div>
            </van-col>
            <van-col span='12' @click='$router.push("/detail")'>
              <img src="http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_320x999.jpg" alt="">
              <p class='van-ellipsis'>2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装</p>
              <div class='comment'>
                <span class='price'>￥59.00</span>
                <van-icon name="star-o" />
                <span class='star-num'>78</span>
              </div>
            </van-col>
            <van-col span='12' @click='$router.push("/detail")'>
              <img src="http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_320x999.jpg" alt="">
              <p class='van-ellipsis'>2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装</p>
              <div class='comment'>
                <span class='price'>￥59.00</span>
                <van-icon name="star-o" />
                <span class='star-num'>78</span>
              </div>
            </van-col>
          </van-row>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabNames: ['流行', '新款', '精选'],
      images: [
        'https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg',
        'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg',
        'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg',
        'https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg',
      ],
      recomment: [
        'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
        'https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png',
        'https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png',
        'https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png',
      ],
    };
  },
};
</script>

<style>

</style>
