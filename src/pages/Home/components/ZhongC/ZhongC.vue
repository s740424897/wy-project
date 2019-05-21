<template>
  <div class="zhong_chou_box">
    <div class="zhong_chou_header">
      <span class="zhong_chou_title">众筹</span>
      <span class="zhong_chou_more">更多 &gt;</span>
    </div>

    <ul class="zhong_chou_goods" v-if="homeData.zhongChouList">
      <li v-for="(item, index) in homeData.zhongChouList" :key="index">
        <img v-lazy="item.picUrl" :src="item.picUrl" alt="新品">
        <div class="zhong_chou_info">
          <div class="zhong_chou_title">{{item.name}}</div>

          <div class="zhong_chou_price">{{item.showRetailPrice}}</div>

          <div class="zhong_chou_p_box">
            <div class="zhong_chou_progress">
              <div class="bg" :style="{width: item.progress + '%'}"></div>
            </div>
            <div class="zhong_chou_percent">{{item.progress}}%</div>
          </div>

          <div class="zhong_chou_supportNum">{{item.supportNum}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'ZhongC',
    computed:{
      ...mapState({
        homeData:state=>state.home.homeData
      })
    },
    async mounted () {
      await this.$store.dispatch('getHomeData')
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"

  .zhong_chou_box
    .zhong_chou_header
      display flex
      align-items center
      justify-content space-between
      .zhong_chou_title
        font-size 32px
        line-height 100px
        margin 0 20px 0 50px
      .zhong_chou_more
        font-size 28px
        line-height 100px
        margin-right 50px
    .zhong_chou_goods
      padding-left 20px
      display flex
      flex-direction column
      >li
        height 250px
        display flex
        &:first-child
          border-top 1px solid #d8d8d8
          padding-top 20px
        >img
          width 210px
          height 210px
          background-color #f5f5f5
        .zhong_chou_info
          height 100%
          margin-left 30px
          font-size 24px
          line-height 36px
          display flex
          flex-direction column
          .zhong_chou_title
            color #7f7f7f
          .zhong_chou_price
            color #7f7f7f
            margin-top 7.5px
          .zhong_chou_p_box
            display flex
            align-items center
            justify-content center
            margin-top 10px
            .zhong_chou_progress
              width 360px
              height 6px
              margin-right 20px
              background #d8d8d8
              display flex
              justify-content flex-start
              .bg
                height 100%
                background-color #fea438
            .zhong_chou_percent
              color #7f7f7f
          .zhong_chou_supportNum
            margin-top 40px
            color #7f7f7f
</style>

