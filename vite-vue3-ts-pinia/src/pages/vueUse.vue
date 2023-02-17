<template>
  <div class="vueUse">
    <h1> 测试 vueUse 的鼠标坐标 </h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <router-link to="/home">点击跳转至首页</router-link>
  </div>
</template>

<script lang="ts" name="VueUse" setup>
  import { watch } from 'vue';
  import { useMouse } from '@vueuse/core';
  const { x, y } = useMouse();
  watch([x, y], (newVal, oldVal) => {
    console.log('watch--newVal--', newVal, 'oldVal--', oldVal);
  });
</script>
<style lang="less" scoped>
  .vueUse {
    padding-top: 10px;
    h1 {
      padding: 50px 0 10px;
    }
    h3 {
      padding-bottom: 10px;
    }
  }
</style>
