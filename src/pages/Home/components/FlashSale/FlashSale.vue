<template>
  <div class="flash-sale-box">
    <div class="flash-header">
      <div class="left-info">
        <span class="flash-title">限时购</span>
        <div class="flash-time">
          <span class="hour">01</span>
          <span class="point">:</span>
          <span class="minutes">01</span>
          <span class="point">:</span>
          <span class="seconds">01</span>
        </div>
      </div>
      <span class="flash-more">更多 &gt;</span>
    </div>

    <ul class="flash-goods" v-if="homeData.flashSaleModule">
      <li v-for="(item,index)in homeData.flashSaleModule.itemList" :key="index"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'FlashSale'
  }
</script>

<style scoped>

</style>
