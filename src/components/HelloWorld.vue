<!--
 * @Author: huwanfei
 * @Date: 2023-08-04 10:59:36
 * @LastEditTime: 2023-08-04 15:30:47
 * @LastEditors: huwanfei
 * @Description:  
 * @FilePath: /vue3-pick-h5/src/components/HelloWorld.vue
-->
<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    hello world {{ msg }}
  </div>
</template>

<style scoped>

</style>
