<template>
  <div class="user">
    <h2>欢迎使用vite+vue3+ts+pinia+vue-router4</h2>
    <div class="name">{{ userStore.name }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useUserStore } from '@/store/user';

  export default defineComponent({
    name: 'UsePinia',
    setup() {
      const userStore = useUserStore();
      return {
        userStore
      };
    }
  });
</script>
<style lang="less" scoped>
  .user {
    padding: 10px 0 10px;
    .name {
      padding-top: 10px;
      color: aqua;
    }
  }
</style>
