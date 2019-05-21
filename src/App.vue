<template>
  <div id="app">
    <HeaderTab v-show="$route.meta.showHeader"></HeaderTab>
    <router-view></router-view>
    <FooterTab v-show="$route.meta.showFooter"></FooterTab>
  </div>
</template>

<script>
import FooterTab from './components/Foooter/footer'
import HeaderTab from './components/Header/header'
export default {
  name: 'App',
  components: {
    HeaderTab,
    FooterTab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /************** 灰色顶部分割线 **************/
  .my- split:before    /* 灰色顶部分割线 */
    content ""
    display block
    width 100%
    height 18px
    border-top 1px solid rgba(7, 17, 27, 0.1)
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    background-color: #f3f5f7

  .line-two-point    /* 第二行出现省略号 */
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  input::-webkit-input-placeholder,
  input:-moz-placeholder,
  input::-moz-placeholder,
  input:-ms-input-placeholder
    color #f00
    font-size 28px
</style>
