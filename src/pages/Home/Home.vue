<template>
  <div class="home-box clearfix">
    <Swiper></Swiper>
    <ServicePoicy ></ServicePoicy>
    <Goods></Goods>
    <div class="bossRecommen">
      <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="bossRecommen">
    </div>
    <SceneLight></SceneLight>
    <PersonalShop></PersonalShop>
    <Split></Split>
    <FlashSale></FlashSale>
    <Split></Split>
    <NewGoods></NewGoods>
    <Split></Split>
    <Recommended></Recommended>
    <Split></Split>
    <TopList></TopList>
    <Split></Split>
    <ZhongC></ZhongC>


    <CategoryList></CategoryList>
    <BottomTab></BottomTab>
  </div>
</template>

<script>
  import Swiper from './components/Swiper/Swiper'
  import ServicePoicy from './components/ServicePoicy/ServicePoicy'
  import Goods from './components/Goods/Goods'
  import SceneLight from './components/SceneLight/SceneLight'
  import PersonalShop from './components/PersonalShop/PersonalShop'
  import FlashSale from './components/FlashSale/FlashSale'
  import NewGoods from './components/NewGoods/NewGoods'
  import Recommended from './components/Recommended/Recommended'
  import TopList from './components/TopList/TopList'
  import ZhongC from './components/ZhongC/ZhongC'
  import CategoryList from './components/CategoryList/CategoryList'
  import BottomTab from './components/BottomTab/BottomTab'
  export default {
    name:'Home',
    components:{
      Swiper,
      ServicePoicy,
      Goods,
      SceneLight,
      PersonalShop,
      FlashSale,
      NewGoods,
      Recommended,
      TopList,
      ZhongC,
      CategoryList,
      BottomTab
    }
  }
</script>

<style lang="stylus" rel="stylesheet.stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .home-box
    padding-top 150px
    padding-bottom 98px
    overflow-x hidden
  .bossRecommen
    height 160px
    margin-bottom 40px
    background-color #fff
    img
      height 100%
</style>
