<template>
  <div id="detail">
    <div class='back'>
      <van-icon name='arrow-left' size='29' @click='$router.back()'></van-icon>
    </div>
    <van-index-bar :index-list="indexList" highlight-color='#ff8198'>
      <van-index-anchor index="商品" class='first'></van-index-anchor>
      <div class='swiper'>
        <van-swipe :autoplay='3000'>
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img :src='image' />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class='goods-info'>
        <p>秋装女2018新款套装时尚晚晚风气质chic港味女神网红两件套装俏皮</p>
        <div class='goods-price'>
          <span class='now-price'>￥109.00</span>
          <span class='last-price'>￥109.00</span>
          <van-tag type="warning" size='large' round>今日特价</van-tag>
        </div>
        <van-row class='sell-num'>
          <van-col span='8'>
            销量 <van-badge content='1314' color='#ff8198'></van-badge>
          </van-col>
          <van-col span='8'>
            收藏 <van-badge content='618' color='#ff8198'></van-badge>
          </van-col>
          <van-col span='8'>
            默认快递
          </van-col>
        </van-row>
        <van-cell-group>
          <van-cell title='退货补运费' value='全国包邮'></van-cell>
          <van-cell title='7天无理由退货' value='72小时发货'></van-cell>
        </van-cell-group>
      </div>
      <div class='store-info'>
        <div class='store-info-title'>
          <img src="http://s5.mogucdn.com/p1/151208/16mtca_ie3tkmzumjsginzvguzdambqgayde_200x200.jpg" alt="">
          <span>美衣梦莎</span>
        </div>
        <van-divider :style="{ borderColor: '#eeeeee', padding: '10px 0', margin:'0' }" />
        <div class='store-info-content'>
          <van-row>
            <van-col span='12'>
              <van-row>
                <van-col span='12' class='store-info-content-num'>
                  <p>4.5342万</p>
                  <span>总销量</span>
                </van-col>
                <van-col span='12' class='store-info-content-num'>
                  <p>108件</p>
                  <span>总宝贝数</span>
                </van-col>
              </van-row>
            </van-col>
            <van-col span='12' class='store-info-content-race'>
              <div>
                <span>描述相符</span>
                <span>5.00</span>
                <van-tag type="danger" size='large'>高</van-tag>
              </div>
              <div>
                <span>价格合理</span>
                <span>4.00</span>
                <van-tag type="primary" size='large'>低</van-tag>
              </div>
              <div>
                <span>质量满意</span>
                <span>5.00</span>
                <van-tag type="danger" size='large'>高</van-tag>
              </div>
            </van-col>
          </van-row>
        </div>
        <div class='store-info-goin'>
          <van-button round  type='warning'>进店逛逛</van-button>
        </div>
      </div>
      <div class='goods-composition'>
        <van-cell-group>
          <van-cell title='建议零售价' value='￥129'></van-cell>
          <van-cell title='面料名称' value='奥戴尔'></van-cell>
          <van-cell title='主面料成分' value='棉'></van-cell>
          <van-cell title='主面料成分含量' value='95%'></van-cell>
          <van-cell title='图案' value='纯色'></van-cell>
          <van-cell title='风格' value='文艺'></van-cell>
          <van-cell title='款式' value='套头'></van-cell>
          <van-cell title='袖长' value='短袖'></van-cell>
          <van-cell title='工艺' value='拼接/拼贴'></van-cell>
        </van-cell-group>
      </div>
      <div class='goods-effect'>
        <p>穿着效果</p>
        <ul>
          <li><img src="http://s5.mogucdn.com/p2/170301/106341701_0a2d5j294gd22kl4h1d61g21f95f6_739x729.jpg" alt=""></li>
          <li><img src="http://s5.mogucdn.com/p2/170301/106341701_0a2d5j294gd22kl4h1d61g21f95f6_739x729.jpg" alt=""></li>
          <li><img src="http://s5.mogucdn.com/p2/170301/106341701_0a2d5j294gd22kl4h1d61g21f95f6_739x729.jpg" alt=""></li>
        </ul>
      </div>
      <van-index-anchor index="参数"></van-index-anchor>
      <van-cell-group>
        <van-cell title='尺码' value='M,L,XL,XXL'></van-cell>
        <van-cell title='胸围' value='88,87,88,88'></van-cell>
        <van-cell title='腰围' value='88,87,88,88'></van-cell>
        <van-cell title='肩宽' value='88,87,88,88'></van-cell>
        <van-cell title='衣长' value='88,87,88,88'></van-cell>
        <van-cell title='图案' value='纯色'></van-cell>
        <van-cell title='颜色' value='红,黄,蓝,绿'></van-cell>
        <van-cell title='袖型' value='常规色'></van-cell>
        <van-cell title='上衣厚度' value='适中'></van-cell>
        <van-cell title='尺码' value='XL,L,M,XXL,XXXL'></van-cell>
        <van-cell title='衣长' value='常规款（51-65cm）'></van-cell>
        <van-cell title='版型' value='宽松'></van-cell>
        <van-cell title='下摆' value='敞口'></van-cell>
        <van-cell title='季节' value='四季'></van-cell>
        <van-cell title='材质' value='棉'></van-cell>
        <van-cell title='领型' value='常规'></van-cell>
        <van-cell title='袖长' value='短袖'></van-cell>
        <van-cell title='风格' value='通勤(OL)'></van-cell>
      </van-cell-group>
      <van-index-anchor index="评论"></van-index-anchor>
      <div class='user-comment'>
        <p>用户评论</p>
        <div class='user-comment-title'>
          <img src="http://s11.mogucdn.com/p2/161214/103488673_0l1ff9kf2hbc32fe4a2g05l77d89d_140x140.png" alt="">
          <span>西瓜女皇2009</span>
        </div>
        <div class='user-comment-content'>
          <p>质量非常不错。款式新颖，好喜欢，物流也很快。卖家服务非常好，值得购买</p>
          <van-row>
            <van-col span='12'>
              <span>2018-08-21 19:24:05</span>
            </van-col>
            <van-col span='12'>
              <span>颜色:白色 尺码:XL </span>
            </van-col>
          </van-row>
        </div>
      </div>
      <van-index-anchor index="推荐"></van-index-anchor>
      <div class='goods-list'>
        <p>商品推荐</p>
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
      </div>
      <van-goods-action id='goods-action'>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-icon icon="like-o" text="收藏" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexList: ['商品', '参数', '评论', '推荐'],
      images: [
        'https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg',
        'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg',
        'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg',
        'https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg',
      ],
    };
  },
};
</script>

<style>

</style>
