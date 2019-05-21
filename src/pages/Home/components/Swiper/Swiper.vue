<template>
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(i,index) in imgs" :key="index">
            <img v-lazy="i" :src="i" alt="img"/>
          </li>
        </ul>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!--    &lt;!&ndash; 如果需要滚动条 &ndash;&gt;-->
        <!--    <div class="swiper-scrollbar"></div>-->
      </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from "swiper"

  export default {
    name: 'Swiper',
    data () {
      return {
        imgs: ['https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0',
          'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0'
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          autoplay: true,    //可选选项，自动滑动
          loop: true,
          pagination: {
            el: ' .swiper-pagination',
            type: 'custom',
            clickable: true,
          },
        })
      })

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    height 367.5px
    font-size 200px
    .swiper-wrapper
      .swiper-slide
        img
          width 100%

</style>
