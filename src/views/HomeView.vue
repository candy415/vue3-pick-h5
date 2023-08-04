<!--
 * @Author: huwanfei
 * @Date: 2023-08-04 10:59:36
 * @LastEditTime: 2023-08-04 15:38:46
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /vue3-pick-h5/src/views/HomeView.vue
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const handleClick = () => {
  router.push('/about')
}
</script>

<template>
  <div class="home">
    <h4>home page</h4>
    
    <van-button type="primary" @click="handleClick">跳转</van-button>
  </div>
</template>

<style lang="less" scoped>
.home {
  text-align: center;
}
</style>
